export class OBJLoader2 extends Loader {
    static OBJLOADER2_VERSION: string;
    constructor(manager?: any);
    parser: OBJLoader2Parser;
    modelName: string;
    baseObject3d: Object3D;
    materialHandler: MaterialHandler;
    meshReceiver: MeshReceiver;
    setLogging(enabled: any, debug: any): OBJLoader2;
    setMaterialPerSmoothingGroup(materialPerSmoothingGroup: any): OBJLoader2;
    setUseOAsMesh(useOAsMesh: any): OBJLoader2;
    setUseIndices(useIndices: any): OBJLoader2;
    setDisregardNormals(disregardNormals: any): OBJLoader2;
    setModelName(modelName: string): OBJLoader2;
    setBaseObject3d(baseObject3d: Object3D): OBJLoader2;
    addMaterials(materials: Object, overrideExisting: any): OBJLoader2;
    setCallbackOnAssetAvailable(onAssetAvailable: any): OBJLoader2;
    setCallbackOnProgress(onProgress: any): OBJLoader2;
    setCallbackOnError(onError: any): OBJLoader2;
    setCallbackOnLoad(onLoad: any): OBJLoader2;
    setCallbackOnMeshAlter(onMeshAlter?: Function | undefined): OBJLoader2;
    setCallbackOnLoadMaterials(onLoadMaterials?: Function | undefined): OBJLoader2;
    load(url: string, onLoad: Function, onFileLoadProgress?: Function | undefined, onError?: Function | undefined, onMeshAlter?: Function | undefined): void;
    parse(content: any | string): Object3D;
    _onAssetAvailable(payload: any): void;
}
import { Loader } from "../../../build/three.module.js";
import { Object3D } from "../../../build/three.module.js";
import { MeshReceiver } from "./workerTaskManager/shared/MeshReceiver.js";
