window.BLOG_POSTS = [
  {
    "slug": "kalman_blog",
    "title": "The OG State-Space Model (or Why Rudie Can't Fail)",
    "date": "2026-07-06",
    "content": "Before Mamba and before the recurrent neural networks, there was the Kalman filter. \n\nThe Kalman filter is over 60 years old, originally formulated in Rudolf Kalman's \"A New Approach to Linear Filtering and Prediction Problems\" (1960). \n\nIt attempts to solve the first-order differential equation:\n\n$$\n\\begin{align}\nh_t &= A h_{t-1} + B x_t, \\\\\ny_t &= C h_t + D x_t.\n\\end{align}\n$$\n\nunder a Gaussian-noise model. That makes it the \"ordinary least squares\" of dynamical systems, which is to say, the absolute OG of all the models that have followed it. \n\nLorem ipsum dolor sit amet, $\\int_0^1 x^2\\,dx = \\frac{1}{3}$ and\n$\\nabla \\cdot \\mathbf{F} = 0$, consectetur adipiscing elit. Integer at ligula\nvitae neque pretium porttitor. Suspendisse potenti. Praesent in lacus nec justo\nlacinia faucibus, sed porttitor ipsum.\n\n$$\n\\nabla^2 \\phi =\n\\frac{\\partial^2 \\phi}{\\partial x^2} +\n\\frac{\\partial^2 \\phi}{\\partial y^2}\n$$\n\n## A Small Section\n\nDonec vitae mauris a mi viverra suscipit. Curabitur faucibus, augue at\ncondimentum tempor, lectus sem posuere risus, vel facilisis justo nibh ac\nerat. Morbi euismod sem sit amet augue interdum, sed dignissim leo blandit.\n\nAliquam erat volutpat. Nulla id ipsum sed erat suscipit blandit. Integer\nrhoncus mi sit amet orci lacinia, nec posuere lacus gravida."
  }
];
