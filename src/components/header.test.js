/**
 * @jest-environment jsdom
 */

import { createHeader } from './header.js';

describe('createHeader', () => {
  it('should return a <header> element', () => {
    const header = createHeader('Tic Tac Toe');
    expect(header.tagName).toBe('HEADER');
  });

  it('should contain an <h1> element with the correct text', () => {
    const text = 'Tic Tac Toe';
    const header = createHeader(text);
    const h1 = header.querySelector('h1');

    expect(h1).not.toBeNull();
    expect(h1.tagName).toBe('H1');
    expect(h1.textContent).toBe(text);
  });

  it('should not contain more than one child element', () => {
    const header = createHeader('Tic Tac Toe');
    expect(header.childElementCount).toBe(1);
  });
});