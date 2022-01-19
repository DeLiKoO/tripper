
namespace ObjData {
    export enum Type {
        TransportationData = 1,
        VisitData,
    }
}

interface ObjData<T extends ObjData.Type> {
    'class': T;
    id?: string;
}


export default ObjData;