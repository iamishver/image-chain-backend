import { environment } from '../../environments/environment';
export class Constants {
    public static SERVER_URL = environment.general_const.SERVER_URL;
    public static baseURL = environment.general_const.BASE_URL;
    public static DELAY = 1000;
    public static defaultTimeZone = '+05:30';
    public static defaultDateFormat = 'MM-dd-yyyy';
    public static defaultTimeFormat = 'hh:mm:ss a';
    public static defaultdigitFormat = '1.3-3';
    public static pageLength = '100';

    public static date_formats = [
        { 'date_key': 1, 'date_value': 'MM-dd-yyyy' },
        { 'date_key': 2, 'date_value': 'yyyy-MM-dd' },
        { 'date_key': 3, 'date_value': 'dd, MMMM yyyy' },
        { 'date_key': 4, 'date_value': 'MMMM dd yyyy' },
    ];

    public static time_formats = [
        { 'time_key': 'HH:mm:ss', 'time_value': '24 Hour format' },
        { 'time_key': 'hh:mm:ss a', 'time_value': '12 Hour format' },
    ];

    public static type_formats = [
        { 'type': 0, 'type_value': 'Super Admin' },
        { 'type': 1, 'type_value': 'Doctor' },
        { 'type': 2, 'type_value': 'Nurse' },
    ];

    public static status = [
        { 'status': 0, 'status_value': 'In-Active' },
        { 'status': 1, 'status_value': 'Active' },
    ];
}

export class RegisterToasterMessage {
    public static successRegister = 'Successfully registed';
}

export class AccessToasterMessage {
    public static accessUpdate = 'Access Has Been Granted.';
}

export class LoginToasterMessage {
    public static successLogin = 'Successfully logged in';
    public static successLogout = 'Successfully logged Out';
    public static errorLogin = 'You are not authorized user.';
    public static blankInputError = 'Please enter valid credential.';
    public static userPasswordError = 'Please enter valid email or password.';
}

export class ForgotPasswordToasterMessage {
    public static successfullySent = 'We have sent an email message to your email address, Please check your email messages.';
    public static emailNotExistError = 'Email address is not available, choose a different email address.';
}

export class RecetPasswordToasterMessage {
    public static successfullyUpdate = 'Password Reset successfully.';
}

export class ProfileToasterMessage {
    public static profileUpdate = 'Profile has been updated successfully.';
}

export class GeneralError {
    public static QUERYEXCEPTION = 'Query exception!!!';
    public static somethingWentWrong = 'something Went Wrong.';
}

export class ApiUrl {
    public static siteUrl = {
        'login': Constants.SERVER_URL + 'login',
        'forgotPassword': Constants.SERVER_URL + 'forgotPassword',
        'resetPassword': Constants.SERVER_URL + 'resetPassword',
        'updateProfile': Constants.SERVER_URL + 'updateProfile',
        'profile': Constants.SERVER_URL + 'profile',
    };
}
