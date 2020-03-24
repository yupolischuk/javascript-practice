#include<bits/stdc++.h>
using namespace std;

void addEdge(vector<int> adjacency_list[], int u, int v)
{
    adjacency_list[u].push_back(v);
    adjacency_list[v].push_back(u);
}

void printGraph(vector<int> adjacency_list[], int vertex)
{
    for (int v = 0; v < vertex; ++v) {
        cout << "\n adjacency_list list of vertex "<< v
        << "\n head ";

        for (auto x : adjacency_list[v])
            cout << "-> " << x;
        printf("\n");
    }
}

int main()
{
    int vertex = 5;
    vector<int> adjacency_list[vertex];
    addEdge(adjacency_list, 0, 1);
    addEdge(adjacency_list, 0, 4);
    addEdge(adjacency_list, 1, 2);
    addEdge(adjacency_list, 1, 3);
    addEdge(adjacency_list, 1, 4);
    addEdge(adjacency_list, 2, 3);
    addEdge(adjacency_list, 3, 4);
    printGraph(adjacency_list, vertex);

    return 0;
}