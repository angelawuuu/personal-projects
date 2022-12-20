using Pkg, Clustering, Plots, Images, NearestNeighbors, LinearAlgebra

# Constructing the similarity matrix
img = load("image.jpg")
new_img = imresize(img, ratio=1/10)
s = size(new_img)[1]
m = zeros(3, s*s)
for i in 1:s
  for j in 1:s
    m[:,s*(i-1)+j] = [i, j, red(new_img[i, j])]
  end
end
k = 3
idxs, dists = knn(KDTree(m), m, k)
simMatrix = zeros(s*s, s*s)
for i in 1:size(simMatrix, 1)
  for j in 1:k
    if idxs[i][j] != i
      simMatrix[idxs[i][j], i] = 1
      simMatrix[i, idxs[i][j]] = 1
    end
  end
end
W = simMatrix

# Constructing the degree matrix
function getDegree(W, v)
  sum = 0
  for i in W[v,:]
    sum += i
  end
  return sum
end
 
function getDegreeMatrix(W)
  D = zeros(size(W))
  for v in 1:size(W)[1]
    D[v,v] = getDegree(W,v)
  end
  return D
end

# Constructing the Laplacian matrix
L = D - W
 
# Finding k
ef = eigen(L)
scatter([1:5], ef.values, legend = false)
k = 3

# Extracting first k eigenvalues of the Laplacian matrix
function getFirstKEValues(W, k)
  ef = eigen(Symmetric(W), 1:k)
  ef.vectors
end
U = getFirstKEValues(L, k)

# Running k-means algorithm
R = kmeans(transpose(U), k)

# Plotting the result
scatter(m[2,:], reverse(m[1,:]),
marker_z = R.assignments, legend = false, aspect_ratio=:1, size=(600,600))
