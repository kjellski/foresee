// Compiled by ClojureScript 0.0-2311
goog.provide('foresee.core');
goog.require('cljs.core');
goog.require('foresee.drawing');
goog.require('foresee.drawing');
cljs.core.enable_console_print_BANG_.call(null);
foresee.core.game = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"walls","walls",-268788818),foresee.drawing.walls,new cljs.core.Keyword(null,"spawn","spawn",-1213583293),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(200)], null)], null),new cljs.core.Keyword(null,"balls","balls",1987549674),cljs.core.PersistentVector.EMPTY], null));
foresee.core.draw_game = (function draw_game(){var walls = new cljs.core.Keyword(null,"walls","walls",-268788818).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,foresee.core.game)));var balls = new cljs.core.Keyword(null,"balls","balls",1987549674).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,foresee.core.game));return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (walls,balls){
return (function (p1__5374_SHARP_){return foresee.drawing.draw_shape_at.call(null,foresee.drawing.line.call(null,p1__5374_SHARP_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
});})(walls,balls))
,walls));
});
foresee.core.game_loop = (function game_loop(){return foresee.core.draw_game.call(null);
});
foresee.core.run_game = (function run_game(){return foresee.core.game_loop.call(null);
});
foresee.core.run_game.call(null);

//# sourceMappingURL=core.js.map