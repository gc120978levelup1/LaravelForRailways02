import Auth from './Auth'
import ComplaintController from './ComplaintController'
import MapController from './MapController'
import FaceRecogController from './FaceRecogController'
import QxQRGenController from './QxQRGenController'
import IDScanController from './IDScanController'
import TakePhotoController from './TakePhotoController'
import CanvasController from './CanvasController'
import Settings from './Settings'
const Controllers = {
    Auth: Object.assign(Auth, Auth),
ComplaintController: Object.assign(ComplaintController, ComplaintController),
MapController: Object.assign(MapController, MapController),
FaceRecogController: Object.assign(FaceRecogController, FaceRecogController),
QxQRGenController: Object.assign(QxQRGenController, QxQRGenController),
IDScanController: Object.assign(IDScanController, IDScanController),
TakePhotoController: Object.assign(TakePhotoController, TakePhotoController),
CanvasController: Object.assign(CanvasController, CanvasController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers