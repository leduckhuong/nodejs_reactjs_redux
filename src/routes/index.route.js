import site from './sub-routes/site.route.js'

const route = ( app ) => {
    app.use('/', site);
}
export default route;