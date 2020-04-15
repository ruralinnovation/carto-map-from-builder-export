class DataFetcher {
	constructor(cartoClientCredentials) {
		this._cartoClientCredentials = cartoClientCredentials
	}
	
	fetchSQL = (cartoLayerId, fields, sqlFilter = '') => {
		const config = {
			"CARTO_SERVER": "https://ruralinnovation-admin.carto.com",
		}
		
		const DEV_SQL_CLIENT = axios.create({
			method: 'get',
			url: `${config.CARTO_SERVER}/api/v2/sql`
		})
		
		const sqlQuery = {query: `SELECT ${fields} FROM "${this._cartoClientCredentials.username}".${cartoLayerId} ${sqlFilter}`}
		const promise = DEV_SQL_CLIENT.request({
			params: { q: sqlQuery.query, api_key: this._cartoClientCredentials.apiKey, data: sqlQuery }
		})
		
		return promise.then(res => res.data.rows)
	}
	
	fetchFeatureOutline = (cartoTableName, clickedPolygonCartoDBId) => {
		const POSTGIS_BOUNDARY_SELECTOR = 'ST_asGeoJSON(ST_Boundary(the_geom)) as geom'
		return this.fetchSQL(
			cartoTableName,
			POSTGIS_BOUNDARY_SELECTOR,
			`WHERE cartodb_id = ${clickedPolygonCartoDBId}`,
		)
	}
}
