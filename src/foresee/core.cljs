;; Rebuild in clojure from @kjellski
;; ALL CREDITS to the wonderful writeup of
;; Read the article here:
;; https://rsnous.com/posts/2014-08-07-pinhole-a-falling-ball-demo.html

(ns foresee.core)

(enable-console-print!)

;; -----------------------------------------------------------------------------
;; canvas
(def canvas-id "canvas")
(def canvas (.getElementById js/document canvas-id))
(def screen-width (.-width canvas))
(def screen-height (.-height canvas))
(println (str "screen-resolution: " screen-width "x" screen-height))

(def stage (new js/createjs.Stage canvas-id))
(def shape (new js/createjs.Shape))

(defn draw-shape [x y]
  (do
    (.drawCircle (.beginFill (.-graphics shape) "red") 0 0 40)
    (set! (.-x shape) x)
    (set! (.-y shape) y)
    (.addChild stage shape)
    (.update stage)))

(.log js/console stage)
(.log js/console shape)
;; -----------------------------------------------------------------------------
;; game-state
(def state {:level {}
            :balls []
            })

(def inital-level {:spawn [300 200]})

;; -----------------------------------------------------------------------------
;; drawing
(draw-shape 100 100)
;;(draw-on-stage )
