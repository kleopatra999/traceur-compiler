// Copyright 2013 Traceur Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {
  ErrorReporter,
  format as formatter
} from './ErrorReporter';

/**
 * An implementation of the ErrorReporter that throws a SyntaxError on the
 * first reported error.
 */
export class SyntaxErrorReporter extends ErrorReporter {

  /**
   * @param {SourcePosition} location
   * @param {string} format
   * @param {Array} args
   */
  reportMessageInternal(location, format, args) {
    var s = formatter(location, format, args);
    throw new SyntaxError(s);
  }
}