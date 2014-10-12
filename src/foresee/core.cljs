;; Rebuild in clojure from @kjellski
;; ALL CREDITS to the wonderful writeup of
;; Read the article here:
;; https://rsnous.com/posts/2014-08-07-pinhole-a-falling-ball-demo.html

(ns foresee.core
  (:require [foresee.drawing :as d]))
(enable-console-print!)

;; -----------------------------------------------------------------------------
;; game-state

(def game (atom {:level {:walls d/walls
                         :spawn [300 200]}
                 :balls [[150 200] [150 250] [100 300]]}))

(defn draw-game []
  (let [walls (:walls (:level @game))
        spawn (:spawn (:level @game))
        balls (:balls @game)
        draw (fn [shape position]
               (d/draw-shape-at shape position))]
    (dorun (map #(draw (d/line %) [0 0]) walls))
    (dorun (map #(draw (d/ball) %) balls))
    ))

(defn game-loop []
  (draw-game))
    ;(d/draw-shape-at (d/line (second (:walls (:level @game)))) [0 0]))

(defn run-game []
  (game-loop))

(run-game)
