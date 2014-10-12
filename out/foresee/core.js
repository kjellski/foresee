// Compiled by ClojureScript 0.0-2311
goog.provide('foresee.core');
goog.require('cljs.core');
goog.require('foresee.drawing');
goog.require('foresee.drawing');
cljs.core.enable_console_print_BANG_.call(null);
foresee.core.game = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"walls","walls",-268788818),foresee.drawing.walls,new cljs.core.Keyword(null,"spawn","spawn",-1213583293),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(200)], null)], null),new cljs.core.Keyword(null,"balls","balls",1987549674),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(150),(200)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(150),(250)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(300)], null)], null)], null));
foresee.core.draw_game = (function draw_game(){var walls = new cljs.core.Keyword(null,"walls","walls",-268788818).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,foresee.core.game)));var spawn = new cljs.core.Keyword(null,"spawn","spawn",-1213583293).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,foresee.core.game)));var balls = new cljs.core.Keyword(null,"balls","balls",1987549674).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,foresee.core.game));var draw = ((function (walls,spawn,balls){
return (function (shape,position){return foresee.drawing.draw_shape_at.call(null,shape,position);
});})(walls,spawn,balls))
;cljs.core.dorun.call(null,cljs.core.map.call(null,((function (walls,spawn,balls,draw){
return (function (p1__5076_SHARP_){return draw.call(null,foresee.drawing.line.call(null,p1__5076_SHARP_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
});})(walls,spawn,balls,draw))
,walls));
return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (walls,spawn,balls,draw){
return (function (p1__5077_SHARP_){return draw.call(null,foresee.drawing.ball.call(null),p1__5077_SHARP_);
});})(walls,spawn,balls,draw))
,balls));
});
foresee.core.game_loop = (function game_loop(){return foresee.core.draw_game.call(null);
});
foresee.core.run_game = (function run_game(){return foresee.core.game_loop.call(null);
});
foresee.core.run_game.call(null);

//# sourceMappingURL=core.js.map