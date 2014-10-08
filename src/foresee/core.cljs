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
(.log js/console stage)

(defn ball [radius]
  (let [graphics (new js/createjs.Graphics)]
    (.setStrokeStyle graphics 1)
    (.beginStroke graphics "black")
    (.drawCircle graphics 0 0 radius)
    (new js/createjs.Shape graphics)))

(defn set-position [shape x y]
  (do
    (set! (.-x shape) x)
    (set! (.-y shape) y))
  shape)

;; -----------------------------------------------------------------------------
;; game-state
(def state {:level {}
            :balls []
            })

(def inital-level {:spawn [300 200]})

;; -----------------------------------------------------------------------------
;; drawing
(defn draw-on-stage [shape]
  (do
    (.addChild stage shape)
    (.update stage)))

(let [shape (set-position (ball 30) 100 100)]
    (draw-on-stage shape))
