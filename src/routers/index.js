import locationDetectionController from '../controllers';

const appRouters = (expressApp) => {
    expressApp.post('/api/updateLocation', locationDetectionController);
};

export default appRouters;

