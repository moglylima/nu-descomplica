import * as types from "./types";
import * as dataAccessPin from "../services/DataAccessPin";

export const openModalSavePinAction = () => ({
  type: types.openModalSavePintype,
});

export const openModalCreateFolderAction = () => ({
  type: types.openModalCreateFolderType,
});

export const closeModalAction = () => ({ type: types.closeModaltype });

export const fetchFoldersInitAction = () => ({
  type: types.fetchFoldersInitType,
});

export const fetchFoldersSuccessAction = (folders) => {
  return {
    type: types.fetchFoldersSuccessType,
    payload: folders,
  };
};
// Como aqui estamos fora do contexto do React, passamos o dispatch como parâmetro.
export const fetchFoldersAction = async (dispatch) => {
  dispatch(fetchFoldersInitAction());
  const folders = await dataAccessPin.getFolders();
  dispatch(fetchFoldersSuccessAction(folders));
  return {
    type: types.fetchFoldersType,
    payload: folders,
  };
};

// ----------------------------
export const saveFolderInitAction = () => ({
  type: types.saveFolderInitType,
});

export const saveFolderSuccessAction = (folder) => {
  return {
    type: types.saveFolderSuccessType,
    payload: folder,
  };
};
// Como aqui estamos fora do contexto do React, passamos o dispatch como parâmetro.
export const saveFolderAction = async (dispatch, folderName) => {
  dispatch(saveFolderInitAction());
  const newFolder = await dataAccessPin.saveFolder(folderName);
  dispatch(saveFolderSuccessAction(newFolder));
};
