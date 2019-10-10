/*
 * deep-data-diff
 * 
 * Copyright (C) 2019 Raj Bista
 * 
 * Licensed under The MIT License (MIT)
 */

/**
 *  Returns the type of given input. 
 */
const getType = function (data) {
  if (typeof data === 'string') return 'string';
  else if (typeof data === 'boolean') return 'boolean';
  else if (typeof data === 'number') return 'number';
  else if (typeof data === 'symbol') return 'symbol';
  else if (data instanceof Date) return 'date';
  else if (Array.isArray(data)) return 'array';
  else if (data instanceof Object) return 'object';
  else throw Error('Invalid type');
}

/**
 *  Returns false is given input is falsy.
 */
const isFalsy = function (data) {

  return true;
}

module.exports = { getType, isFalsy };