/*
 * getFolders()
 * saveFolder()
 * savePinFolder()

  Os métodos do Local Storage são sincronos, porém vamos simular o comportamento assincrono!

*/

// Gera ID
const generateId = new Date().getTime();

const saveFolders = async (folders) => {
  localStorage.setItem("folders", JSON.stringify(folders));
};

//Get Folders
export const getFolders = async () => {
  return JSON.parse(localStorage.getItem("folders")) || [];
};

//Save Folder
export const saveFolder = async (folderName) => {
  const folders = await getFolders();

  const newFolder = {
    id: generateId,
    name: folderName,
    pins: [],
  };

  folders.push(newFolder);
  // localStorage.setItem("folders", JSON.stringify(folders));
  await saveFolders(folders);
  return newFolder;
};

export const savePinInFolder = async (folderId, pinId) => {
  const folders = await getFolders();

  // Caso não encontre o folderId, retorna -1
  const folderIndex = folders.findIndex((folder) => folder.id === folderId);
  if (folderIndex !== -1) {
    // Caso não encontre o pinId no folder, seta o pin no folder

    folders[folderIndex].pins.push(pinId);
    // Salva no Local Storage
    //localStorage.setItem("folders", JSON.stringify(folders));
    await saveFolders(folders);

    // Retorna o folder atualizado
    return { ...folders[folderIndex] };
    //id: folderId
  }
};
