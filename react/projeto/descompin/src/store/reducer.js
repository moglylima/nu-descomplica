import * as types from "./types";
export function reducer(state, action) {
  switch (action.type) {
    case types.openModalSavePintype:
      return {
        ...state,
        type: types.openModalSavePintype,
        mode: "savePin",
      };
    case types.closeModaltype:
      return {
        ...state,
        type: types.closeModaltype,
        mode: null,
      };

    case types.fetchFoldersInitType:
      return {
        ...state,
        type: types.fetchFoldersInitType,
      };
    case types.fetchFoldersSuccessType:
      return {
        ...state,
        type: types.fetchFoldersSuccessType,
        folders: action.payload,
      };
    case types.openModalCreateFolderType:
      return {
        ...state,
        type: types.openModalCreateFolderType,
        mode: "createFolder",
      };
    case types.saveFolderSuccessType:
      return {
        ...state,
        type: types.saveFolderSuccessType,
        folders: [...state.folders, action.payload],
      };
    default:
      return state;
  }
}
