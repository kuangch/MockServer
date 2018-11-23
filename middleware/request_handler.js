/* ========================================
 *  company : Dilusense
 *   author : Kuangch
 *     date : 2018/11/23
 * ======================================== */

let ApplicationJsonShow = function (req, res, next) {
    if (req.body){
        console.log(`body:${JSON.stringify(req.body,null,2)}`)
    }
    next();
};

let RequestShow = function (req, res, next) {
    let requestTime = new Date().toLocaleString();
    console.log(`${req.method} ${requestTime} ${req.originalUrl}`)
    next();
};

module.exports = {
    ApplicationJsonShow,
    RequestShow,
}