/**
 * @param {Array<Array<string>>} actions
 * @return {string}
 */
// [["INSERT","a"],["INSERT","b"]]
const performEditorActions = (actions) => {
  // INSERT, DELETE, UNDO, REDO
  /* 
    Input:
  INSERT 'a'
  INSERT 'b'
  DELETE
  UNDO
  REDO
  REDO # Does nothing
  
  Output: "ab"
    */
  let actionStack = [];
  let undoStack = [];
  let result = [];
  for (let i = 0; i < actions.length; i++) {
    let actionDef = actions[i];
    let actionName = actionDef[0];
    let actionVal;
    if (actionDef.length === 2) {
      actionVal = actionDef[1];
    }
    if (actionName === 'INSERT') {
      actionStack.push(actionDef);
      result.push(actionVal);
    } else if (actionName === 'DELETE') {
      let deletedVal = result.pop();
      actionStack.push(['DELETE', deletedVal]);
    } else if (actionName === 'UNDO') {
      if (actionStack.length > 0) {
        let lastAction = actionStack.pop();
        let lastActionName = lastAction[0];
        let lastActionValue = lastAction[1];
        if (lastActionName === 'INSERT') {
          result.pop();
          undoStack.push(['INSERT', lastActionValue]);
        } else if (lastActionName === 'DELETE') {
          result.push(lastActionValue);
          undoStack.push(['DELETE', lastActionValue]);
        }
      }
    } else if (actionName === 'REDO') {
      if (undoStack.length > 0) {
        let lastAction = undoStack.pop();
        let lastActionName = lastAction[0];
        if (lastActionName === 'INSERT') {
          let lastActionValue = lastAction[1];
          result.push(lastActionValue);
        } else if (lastActionName === 'DELETE') {
          result.pop();
        }
      }
    }
  }
  return result.join('');
};
