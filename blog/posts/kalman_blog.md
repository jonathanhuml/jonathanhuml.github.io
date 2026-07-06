---
title: "The OG State-Space Model (or Why Rudie Can't Fail)"
date: 2026-07-06
---

Before Mamba and before the recurrent neural networks, there was the Kalman filter. 

The Kalman filter is over 60 years old, originally formulated in Rudolf Kalman's "A New Approach to Linear Filtering and Prediction Problems" (1960). 

The algorithm does exact inference for the first-order differential equation:

$$
\begin{align}
h_t &= A h_{t-1}, \\
y_t &= C h_t.
\end{align}
$$

under a Gaussian-noise model. That makes it the "ordinary least squares" of dynamical systems, which is to say, the absolute OG of all the models that have followed it. 

Lorem ipsum dolor sit amet, $\int_0^1 x^2\,dx = \frac{1}{3}$ and
$\nabla \cdot \mathbf{F} = 0$, consectetur adipiscing elit. Integer at ligula
vitae neque pretium porttitor. Suspendisse potenti. Praesent in lacus nec justo
lacinia faucibus, sed porttitor ipsum.

$$
\nabla^2 \phi =
\frac{\partial^2 \phi}{\partial x^2} +
\frac{\partial^2 \phi}{\partial y^2}
$$

## A Small Section

Donec vitae mauris a mi viverra suscipit. Curabitur faucibus, augue at
condimentum tempor, lectus sem posuere risus, vel facilisis justo nibh ac
erat. Morbi euismod sem sit amet augue interdum, sed dignissim leo blandit.

Aliquam erat volutpat. Nulla id ipsum sed erat suscipit blandit. Integer
rhoncus mi sit amet orci lacinia, nec posuere lacus gravida.
