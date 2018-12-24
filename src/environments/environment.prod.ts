export const environment = {
    production: true,
    hmr: false,
    general_const:
    {
        'BASE_URL': 'https://iclab.viitorcloud.in/',
        'Version': 'V1',
        'SERVER_URL': 'https://ic-api.viitorcloud.in:4300/admin/',
        'type_formats': [
            { 'type': 0, 'type_value': 'Super Admin' },
            { 'type': 1, 'type_value': 'Doctor' },
            { 'type': 2, 'type_value': 'Nurse' },
        ],
        'status': [
            { 'status': 0, 'status_value': 'In-Active' },
            { 'status': 1, 'status_value': 'Active' },
        ],
        // 'SERVER_URL': 'http://192.168.1.195:4000/admin/' + this.environment.general_const,
    }
};
