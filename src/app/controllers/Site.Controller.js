class Site{
    index(req, res, next){
        res.render('index');
    }
}
export default new Site();