// Compiled by ClojureScript 0.0-2311
goog.provide('foresee.drawing');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
foresee.drawing.canvas_id = "canvas";
foresee.drawing.canvas = document.getElementById(foresee.drawing.canvas_id);
foresee.drawing.screen_width = foresee.drawing.canvas.width;
foresee.drawing.screen_height = foresee.drawing.canvas.height;
foresee.drawing.ticker = createjs.Ticker;
cljs.core.println.call(null,("screen-resolution: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(foresee.drawing.screen_width)+"x"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(foresee.drawing.screen_height)));
foresee.drawing.add_event_listener = (function add_event_listener(target,event_name,f){return target.addEventListener(event_name,f);
});
foresee.drawing.event_listeners = (function event_listeners(){return "tick".addEventListener((function (e){return console.log(e);
}));
});
foresee.drawing.add_event_listener.call(null,foresee.drawing.ticker,"tick",(function (e){return console.log(e);
}));
foresee.drawing.stage = (function (){var stage_tmp = (new createjs.Stage(foresee.drawing.canvas_id));stage_tmp.enableMouseOver();
"MainStage".name;
return stage_tmp;
})();
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
foresee.drawing.line = (function line(p__5176){var vec__5179 = p__5176;var x1 = cljs.core.nth.call(null,vec__5179,(0),null);var y1 = cljs.core.nth.call(null,vec__5179,(1),null);var x2 = cljs.core.nth.call(null,vec__5179,(2),null);var y2 = cljs.core.nth.call(null,vec__5179,(3),null);var graphics = (new createjs.Graphics());var G__5180_5181 = graphics;G__5180_5181.setStrokeStyle(foresee.drawing.line_thickness);
G__5180_5181.beginStroke("black");
G__5180_5181.moveTo(x1,y1);
G__5180_5181.lineTo(x2,y2);
return (new createjs.Shape(graphics));
});
/**
* creates a ball shape with a cross in it
*/
foresee.drawing.ball = (function ball(){var graphics = (new createjs.Graphics());var G__5183_5184 = graphics;G__5183_5184.setStrokeStyle(foresee.drawing.line_thickness);
G__5183_5184.beginStroke("black");
G__5183_5184.moveTo((0),(- foresee.drawing.ball_radius));
G__5183_5184.lineTo((0),foresee.drawing.ball_radius);
G__5183_5184.moveTo((- foresee.drawing.ball_radius),(0));
G__5183_5184.lineTo(foresee.drawing.ball_radius,(0));
G__5183_5184.setStrokeStyle((foresee.drawing.line_thickness + (1)));
G__5183_5184.drawCircle((0),(0),foresee.drawing.ball_radius);
return (new createjs.Shape(graphics));
});
foresee.drawing.set_position = (function set_position(shape,x,y){shape.x = x;
shape.y = y;
return shape;
});
foresee.drawing.draw_shape_at = (function draw_shape_at(shape,p__5185){var vec__5187 = p__5185;var x = cljs.core.nth.call(null,vec__5187,(0),null);var y = cljs.core.nth.call(null,vec__5187,(1),null);return foresee.drawing.draw_on_stage.call(null,foresee.drawing.set_position.call(null,shape,x,y));
});

//# sourceMappingURL=drawing.js.map