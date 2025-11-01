export const apiEndPoints = {
    login: "auth/login",
    signup: "auth/signup",
    uploadReport: "report/upload",
    getReport: "report/get_report",
    getSingleReport: (id) => `get_report/:${id}`,
    addFamilyMember: "family/upload",
    getFamilyMember: "family/get"
}