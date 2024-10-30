// /* eslint-disable no-undef */
// import '@testing-library/jest-dom'; // This imports jest-dom matchers for assertions

// Object.defineProperty(window, 'matchMedia', {
//   writable: true,
//   value: vi.fn().mockImplementation((query) => ({
//     matches: false,
//     media: query,
//     onchange: null,
//     addListener: vi.fn(), // Deprecated
//     removeListener: vi.fn(), // Deprecated
//     addEventListener: vi.fn(),
//     removeEventListener: vi.fn(),
//     dispatchEvent: vi.fn(),
//   })),
// });

// // Mock global fetch
// global.fetch = vi.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve({}),
//   })
// );

import '@testing-library/jest-dom';