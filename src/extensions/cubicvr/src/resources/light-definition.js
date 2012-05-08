if ( typeof define !== "function" ) {
  var define = require( "amdefine" )( module );
}

define( function ( require ) {

  var LightDefinition = function( data ) {
    if (typeof (data) != "object") {
      data = [];
    }

    this.type = (data.type !== undefined) ?  data.type : LightDefinition.LightTypes.POINT;
    this.diffuse = (data.diffuse !== undefined) ? data.diffuse : [ 1, 1, 1 ];
    this.specular = (data.specular !== undefined) ? data.specular : [ 1.0, 1.0, 1.0 ];
    this.intensity = (data.intensity !== undefined) ? data.intensity : 1.0;
    this.position = (data.position !== undefined) ? data.position : [ 0, 0, 0 ];
    this.direction = (data.direction !== undefined) ? data.direction : [ 0, 0, 0 ];
    this.distance = (data.distance !== undefined) ? data.distance : ((this.type === LightDefinition.LightTypes.AREA) ? 30 : 10);
    this.cutoff = (data.cutoff !== undefined) ? data.cutoff : 60;
    this.map_res = (data.map_res !== undefined) ? data.map_res : (this.type === LightDefinition.LightTypes.AREA) ? 2048 : 512;
    this.map_res = (data.mapRes !== undefined) ? data.mapRes : this.map_res;
    this.method = (data.method !== undefined) ? data.method : LightDefinition.LightingMethods.DYNAMIC;
    this.areaCam = (data.areaCam !== undefined) ? data.areaCam : null;
    this.areaCeiling = (data.areaCeiling !== undefined) ? data.areaCeiling : 40;
    this.areaFloor = (data.areaFloor !== undefined) ? data.areaFloor : -40;
    this.areaAxis = (data.areaAxis !== undefined) ? data.areaAxis : [ 1, 1, 0 ];
    this.projectorTex = (data.projector !== undefined) ? data.projector : null;
  };

  LightDefinition.LightTypes = {
    NULL : 0,
    POINT : 1,
    DIRECTIONAL : 2,
    SPOT : 3,
    AREA: 4
  }

  LightDefinition.LightingMethods = {
    GLOBAL : 0,
    STATIC : 1,
    DYNAMIC : 2
  }

  return LightDefinition;
});