;; Rebuild in clojure from @kjellski
;; ALL CREDITS to the wonderful writeup of
;; Read the article here:
;; https://rsnous.com/posts/2014-08-07-pinhole-a-falling-ball-demo.html

(ns foresee.core)

(enable-console-print!)

;; -----------------------------------------------------------------------------
;; canvas
(def canvas (.getElementById js/document "canvas"))
(def screen-width (.-width canvas))
(def screen-height (.-height canvas))
(println (str "screen-resolution: " screen-width "x" screen-height))

(def stage (new js/createjs.Stage canvas))
(def shape (new js/createjs.Shape))
;; -----------------------------------------------------------------------------
;; game-state
(def state {:level {}
            :balls []
            })

(def inital-level {:spawn [300 200]})

;; -----------------------------------------------------------------------------
;; drawing

;var canvas = document.getElementById('canvas');
;var stage = new createjs.Stage(canvas);
;var shape = new createjs.Shape();
