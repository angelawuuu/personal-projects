## 1.1 Spectral Clustering
Spectral clustering is one of the most widely used data analysis tools. This technique divides the data into groups, or clusters, according to their similarity, so data in the same group are considered similar while data in different groups are not similar to each other. Now the question is, how do we determine these clusters? Spectral clustering represents the data sets as graphs and classifies them by the edges connecting the points, so the points that are most connected to each other are considered to be part of the same group. Thus, while other types of clustering like the k-means algorithm rely on Euclidean distance, spectral clustering is more graph-based and depends on the connections within data points in its graph.

## 1.2 Image Segmentation
For our project, we specifically chose to explore image segmentation via spectral clustering. While the underlying theory is the same, image segmentation focuses on partitioning the image into regions, which ideally represent distinct objects, by detecting groups of pixels within an image by considering how similar they are with regards to properties like intensity, color, and position. Image segmentation has many useful applications including medical imaging, face recognition, video surveillance, and many more.

## Files
Image-Segmentation.jl contains the code that segments the images. Replace "image.jpg" with the path to your image file.
An-Exploration-of-Image-Segmentation-via-Spectral-Clustering.pdf contains our paper detailing the linear algebra background of the algorithm.
