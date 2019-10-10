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
const findType = function (data) {

  return typeof data;
}

/**
 *  Returns false is given input is falsy.
 */
const isFalsy = function (data) {

  return true;
}

module.exports = { findType, isFalsy };