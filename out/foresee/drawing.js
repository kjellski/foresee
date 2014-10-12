// Compiled by ClojureScript 0.0-2311
goog.provide('foresee.drawing');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
foresee.drawing.canvas_id = "canvas";
foresee.drawing.canvas = document.getElementById(foresee.drawing.canvas_id);
foresee.drawing.screen_width = foresee.drawing.canvas.width;
foresee.drawing.screen_height = foresee.drawing.canvas.height;
cljs.core.println.call(null,("screen-resolution: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(foresee.drawing.screen_width)+"x"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(foresee.drawing.screen_height)));
foresee.drawing.stage = (new createjs.Stage(foresee.drawing.canvas_id));
console.log(foresee.drawing.stage);
foresee.drawing.walls = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),foresee.drawing.screen_height], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),foresee.drawing.screen_width,(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [foresee.drawing.screen_width,foresee.drawing.screen_height,foresee.drawing.screen_width,(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [foresee.drawing.screen_width,foresee.drawing.screen_height,(0),foresee.drawing.screen_height], null)], null);
foresee.drawing.ball_radius = (20);
foresee.drawing.line_thickness = (1);
/**
* draws given shape on stage
*/
foresee.drawing.draw_on_stage = (function draw_on_stage(shape){foresee.drawing.stage.addChild(shape);
return foresee.drawing.stage.update();
});
/**
* creates a line from (x1, y1) to (x2, y2)
*/
foresee.drawing.line = (function line(p__5064){var vec__5067 = p__5064;var x1 = cljs.core.nth.call(null,vec__5067,(0),null);var y1 = cljs.core.nth.call(null,vec__5067,(1),null);var x2 = cljs.core.nth.call(null,vec__5067,(2),null);var y2 = cljs.core.nth.call(null,vec__5067,(3),null);var graphics = (new createjs.Graphics());var G__5068_5069 = graphics;G__5068_5069.setStrokeStyle(foresee.drawing.line_thickness);
G__5068_5069.beginStroke("black");
G__5068_5069.moveTo(x1,y1);
G__5068_5069.lineTo(x2,y2);
return (new createjs.Shape(graphics));
});
/**
* creates a ball shape with a cross in it
*/
foresee.drawing.ball = (function ball(){var graphics = (new createjs.Graphics());var G__5071_5072 = graphics;G__5071_5072.setStrokeStyle(foresee.drawing.line_thickness);
G__5071_5072.beginStroke("black");
G__5071_5072.moveTo((0),(- foresee.drawing.ball_radius));
G__5071_5072.lineTo((0),foresee.drawing.ball_radius);
G__5071_5072.moveTo((- foresee.drawing.ball_radius),(0));
G__5071_5072.lineTo(foresee.drawing.ball_radius,(0));
G__5071_5072.setStrokeStyle((foresee.drawing.line_thickness + (1)));
G__5071_5072.drawCircle((0),(0),foresee.drawing.ball_radius);
return (new createjs.Shape(graphics));
});
foresee.drawing.set_position = (function set_position(shape,x,y){shape.x = x;
shape.y = y;
return shape;
});
foresee.drawing.draw_shape_at = (function draw_shape_at(shape,p__5073){var vec__5075 = p__5073;var x = cljs.core.nth.call(null,vec__5075,(0),null);var y = cljs.core.nth.call(null,vec__5075,(1),null);return foresee.drawing.draw_on_stage.call(null,foresee.drawing.set_position.call(null,shape,x,y));
});

//# sourceMappingURL=drawing.js.map