#include <stdio.h>

int 
find_me(int value) 
{
    int arr[10] = {1,2,3,4,5,6,7,8,9,10};

    for (int i = 0; i < 10; i++) {
        if (value == arr[i]) {
            printf("%d\n", value);
            break;
        }
        else {
            printf("wrong");
            break;
        }
    }

    return value;
}

int main() {
    find_me(1);
}