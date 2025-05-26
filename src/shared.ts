import type { State } from '@clack/core';
import chalk from 'chalk';
import isUnicodeSupported from 'is-unicode-supported';

export const unicode = isUnicodeSupported();
export const s = (c: string, fallback: string) => (unicode ? c : fallback);
export const S_STEP_ACTIVE = s('◆', '*');
export const S_STEP_CANCEL = s('■', 'x');
export const S_STEP_ERROR = s('▲', 'x');
export const S_STEP_SUBMIT = s('◇', 'o');
export const S_STEP_DONE = s('✓', 'o');
export const S_STEP_SKIPPED = s('-', '-');

export const S_BAR_START = s('┌', 'T');
export const S_BAR = s('│', '|');
export const S_BAR_END = s('└', '—');

export const S_RADIO_ACTIVE = s('●', '>');
export const S_RADIO_INACTIVE = s('○', ' ');
export const S_CHECKBOX_ACTIVE = s('◻', '[•]');
export const S_CHECKBOX_SELECTED = s('◼', '[+]');
export const S_CHECKBOX_INACTIVE = s('◻', '[ ]');
export const S_PASSWORD_MASK = s('▪', '•');

export const S_BAR_H = s('─', '-');
export const S_CORNER_TOP_RIGHT = s('╮', '+');
export const S_CONNECT_LEFT = s('├', '+');
export const S_CORNER_BOTTOM_RIGHT = s('╯', '+');

export const S_INFO = s('●', '•');
export const S_SUCCESS = s('◆', '*');
export const S_WARN = s('▲', '!');
export const S_ERROR = s('■', 'x');

export const symbol = (state: State) => {
  switch (state) {
    case 'initial':
    case 'active':
      return chalk.cyan(S_STEP_ACTIVE);
    case 'cancel':
      return chalk.red(S_STEP_CANCEL);
    case 'error':
      return chalk.yellow(S_STEP_ERROR);
    case 'submit':
      return chalk.green(S_STEP_SUBMIT);
    default:
      return '';
  }
};
