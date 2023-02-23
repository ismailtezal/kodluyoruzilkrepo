# Insertion and Selection Sort Odev


[22,27,16,2,18,6] -> Insertion Sort

_______________________________________________________________________________________________________________________

🟢**Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.**

**Cevap:**
+1.Aşama : [2,22,27,16,18,6]0.Indexte En küçük sayı n sorgu ile,
+2.Aşama : [2,6,22,27,16,18]1.Indexte 2. En küçük sayı n-1 Sorgu ile,
+3.Aşama : [2,6,16,22,27,18]2.Indexte 3. En küçük sayı n-2 Sorgu ile,
+4.Aşama : [2,6,16,18,22,27]3.Indexte 4. En küçük sayı n-3 Sorgu ile,

+4 Aşama ile Sıralanıp algoritma sonlanmıştır.

_______________________________________________________________________________________________________________________

🟢**Big-O gösterimini yazınız.**

**Cevap:**
Big O: n+(n-1)+(n-2)+(n-3)+....+1 olmasından dolayı, dominant değer =s $n^{2}$

_______________________________________________________________________________________________________________________

🟢**Time Complexity: Dizi sıralandıktan sonra 18 sayısı aşağıdaki case'lerden hangisinin kapsamına girer? Yazınız**

**Cevap:** 
Dizi sıralandıktan sonra 18 sayısı ortada olduğu için **Average Case**'in kapsamına girer.

_______________________________________________________________________________________________________________________

🟢**[7,3,5,8,2,9,4,15,6] dizisinin Selection Sort'a göre ilk 4 adımını yazınız.**

**Cevap:**
Adım 1: [2,7,3,5,8,9,4,15,6]
Adım 2: [2,3,7,5,8,9,4,15,6]
Adım 3: [2,3,4,7,5,8,9,15,6]
Adım 4: [2,3,4,5,7,8,9,15,6]