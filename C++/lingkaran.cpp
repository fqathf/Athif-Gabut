#include <iostream>
using namespace std;

int main()
{
    double pi = 3.14; //Pi//
    double d; //Diameter//
    int r = d / 2; //Jari-jari//

    //Rumus luas dan keliling lingkaran//
    double luasLingkaran = pi * r * r;
    double kelilingLingkaran = pi * 2 * r;
    
    cin >> d; //Input diameter//
    
    //Hasil luas lingkaran//
    cout << "Luas Lingkaran= " << luasLingkaran << "cm^2" << endl;
    
    //Hasil keliling lingkaran//
    cout << "Keliling Lingkaran= " << kelilingLingkaran << "cm";

    return 0;
}