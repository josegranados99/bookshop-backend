import DataAccess from "../../dataAccess/dataAccess.js";

const dataAccess = new DataAccess();
(async () => {
    await dataAccess.connect();
})()
