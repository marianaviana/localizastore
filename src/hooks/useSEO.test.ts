import { renderHook } from '@testing-library/react';
import { useSEO } from './useSEO';

describe('useSEO', () => {
  afterEach(() => {
    document.title = 'Localiza Store - Modern Tech Products';
    document.head.innerHTML = '';
    jest.restoreAllMocks();
  });

  it('should set document title and meta description if none exists', () => {
    const setAttributeSpy = jest.spyOn(HTMLMetaElement.prototype, 'setAttribute');
    const appendChildSpy = jest.spyOn(document.head, 'appendChild');

    const metadata = {
      title: 'Test Title',
      description: 'Test Description',
    };

    renderHook(() => useSEO(metadata));

    expect(document.title).toBe('Test Title');
    expect(setAttributeSpy).toHaveBeenCalledWith('name', 'description');
    expect(setAttributeSpy).toHaveBeenCalledWith('content', 'Test Description');
    expect(appendChildSpy).toHaveBeenCalled();
  });

  it('should update existing meta description', () => {
    const meta = document.createElement('meta');
    meta.setAttribute('name', 'description');
    meta.setAttribute('content', 'Old Description');
    document.head.appendChild(meta);

    const setAttributeSpy = jest.spyOn(meta, 'setAttribute');

    renderHook(() => useSEO({ description: 'Updated Description' }));

    expect(setAttributeSpy).toHaveBeenCalledWith('content', 'Updated Description');
  });

  it('should reset document title on unmount', () => {
    const { unmount } = renderHook(() =>
      useSEO({ title: 'Temporary Title', description: 'Temporary Description' })
    );

    expect(document.title).toBe('Temporary Title');

    unmount();

    expect(document.title).toBe('Localiza Store - Modern Tech Products');
  });
});
