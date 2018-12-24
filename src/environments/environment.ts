// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    hmr: false,
    general_const:
    {
        'BASE_URL': 'http://localhost:4200/',
        'Version': 'V1',
        'SERVER_URL': 'http://localhost:4300/admin/',
        // 'SERVER_URL': 'http://192.168.1.195:4200/admin/',
        'type_formats': [
            { 'type': 0, 'type_value': 'Super Admin' },
            { 'type': 1, 'type_value': 'Doctor' },
            { 'type': 2, 'type_value': 'Nurse' },
            { 'type': 3, 'type_value': 'Lab' },
        ],
        'status': [
            { 'status': 0, 'status_value': 'In-Active' },
            { 'status': 1, 'status_value': 'Active' },
        ],
        // 'SERVER_URL': 'http://192.168.1.195:4000/admin/' + this.environment.general_const,
    }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
