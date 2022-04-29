import ObjDataNS from '../models/ObjData';
import TransportationData from '../models/TransportationData';
import type VisitData from '../models/VisitData';
import mix from './mix';
import pairs from './pairs';

type ObjData = TransportationData | VisitData;
type TRoadmap = ObjData[];

export default (roadmap: TRoadmap): TRoadmap => {
    const visits: VisitData[] = roadmap.filter(obj => (obj.class === ObjDataNS.Type.VisitData)).map(e => e as VisitData);
    console.log({visits});
    const transportations = pairs(visits, (from, to) => TransportationData.newObject({
        class: ObjDataNS.Type.TransportationData,
        mode: 'Car',
        distance: 0,
        distanceUnit: 'km',
        estimatedDurationInMinutes: 0,
        from,
        to,
    })
    );
    console.log({transportations});
    return mix<ObjData>(visits, transportations);
  }