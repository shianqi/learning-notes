### 客户服务器方式与对等通信方式的主要区别是什么？有没有相同的地方？ ###
前者严格区分服务和被服务者，后者无此区别。后者实际上是前者的双向应用。

### 论述具有五层协议的网络体系结构的要点，包括各层的主要功能。###
答：综合OSI 和TCP/IP 的优点，采用一种原理体系结构。各层的主要功能：
* __物理层__ 物理层的任务就是透明地传送比特流。（注意：传递信息的物理媒体，如双绞线、同轴电缆、光缆等，是在物理层的下面，当做第0 层。） 物理层还要确定连接电缆插头的定义及连接法。
* __数据链路层__ 数据链路层的任务是在两个相邻结点间的线路上无差错地传送以帧（frame）为单位的数据。每一帧包括数据和必要的控制信息。
* __网络层__ 网络层的任务就是要选择合适的路由，使 发送站的运输层所传下来的分组能够正确无误地按照地址找到目的站，并交付给目的站的运输层。
* __运输层__ 运输层的任务是向上一层的进行通信的两个进程之间提供一个可靠的端到端服务，使它们看不见运输层以下的数据通信的细节。
* __应用层__ 应用层直接为用户的应用进程提供服务。

### 数据链路层的三个基本问题(封装成帧、透明传输和差错检测)为什么都必须加以解决？ ###
答：
__封装成帧__ 是分组交换的必然要求
__透明传输__ 避免消息符号与帧定界符号相混淆
__差错检测__ 防止合差错的无效数据帧浪费后续路由上的传输和处理资源

### 要发送的数据为1101011011。采用CRC的生成多项式是P（X）=X4+X+1。试求应添加在数据后面的余数。数据在传输过程中最后一个1变成了0，问接收端能否发现？若数据在传输过程中最后两个1都变成了0，问接收端能否发现？采用CRC检验后，数据链路层的传输是否就变成了可靠的传输？###
答：作二进制除法，1101011011  0000    10011 得余数1110 ，添加的检验序列是1110.作二进制除法，两种错误均可发展仅仅采用了CRC检验，缺重传机制，数据链路层的传输还不是可靠的传输。

### 一个PPP帧的数据部分（用十六进制写出）是7D 5E FE 27 7D 5D 7D 5D 65 7D 5E。试问真正的数据是什么（用十六进制写出）？ ###
答：7D 5E FE 27 7D 5D 7D 5D 65 7D 5E
7E FE 27 7D 7D 65 7E 
```
7D 5E->7E
```

### 假定1km长的CSMA/CD网络的数据率为1Gb/s。设信号在网络上的传播速率为200000km/s。求能够使用此协议的最短帧长。###
答：对于1km电缆，单程传播时间为1/200000=5为微秒，来回路程传播时间为10微秒，为了能够按照CSMA/CD工作，最小帧的发射时间不能小于10微秒，以Gb/s速率工作，10微秒可以发送的比特数等于10*10^-6/1*10^-9=10000,因此，最短帧是10000位或1250字节长

### 假定在使用CSMA/CD协议的10Mb/s以太网中某个站在发送数据时检测到碰撞，执行退避算法时选择了随机数r=100。试问这个站需要等待多长时间后才能再次发送数据？如果是100Mb/s的以太网呢？ ###
答：对于10mb/s的以太网，以太网把争用期定为51.2微秒，要退后100个争用期，等待时间是51.2（微秒）*100=5.12ms
对于100mb/s的以太网，以太网把争用期定为5.12微秒，要退后100个争用期，等待时间是5.12（微秒）*100=512微秒

### 试说明IP地址与硬件地址的区别，为什么要使用这两种不同的地址？ ### 
IP 地址就是给每个连接在因特网上的主机（或路由器）分配一个在全世界范围是唯一的 32 位的标识符。从而把整个因特网看成为一个单一的、抽象的网络
在实际网络的链路上传送数据帧时，最终还是必须使用硬件地址。
MAC地址在一定程度上与硬件一致，基于物理、能够标识具体的链路通信对象、IP地址给予逻辑域的划分、不受硬件限制。

### （1）子网掩码为255.255.255.0代表什么意思？###
有三种含义
其一是一个A类网的子网掩码，对于A类网络的IP地址，前8位表示网络号，后24位表示主机号，使用子网掩码255.255.255.0表示前8位为网络号，中间16位用于子网段的划分，最后8位为主机号。
第二种情况为一个B类网，对于B类网络的IP地址，前16位表示网络号，后16位表示主机号，使用子网掩码255.255.255.0表示前16位为网络号，中间8位用于子网段的划分，最后8位为主机号。
第三种情况为一个C类网，这个子网掩码为C类网的默认子网掩码。
### （2）一网络的现在掩码为255.255.255.248，问该网络能够连接多少个主机？ ###
255.255.255.248即11111111.11111111.11111111.11111000.
每一个子网上的主机为(2^3)=6 台
掩码位数29，该网络能够连接8个主机，扣除全1和全0后为6台。
### （3）一A类网络和一B网络的子网号subnet-id分别为16个1和8个1，问这两个子网掩码有何不同？ ###
A类网络：11111111   11111111   11111111   00000000
给定子网号（16位“1”）则子网掩码为255.255.255.0
B类网络    11111111   11111111   11111111   00000000
给定子网号（8位“1”）则子网掩码为255.255.255.0但子网数目不同
### （4）一个B类地址的子网掩码是255.255.240.0。试问在其中每一个子网上的主机数最多是多少？ ###
（240）10=（128+64+32+16）10=（11110000）2
Host-id的位数为4+8=12，因此，最大主机数为：
2^12-2=4096-2=4094
11111111.11111111.11110000.00000000    主机数2^12-2
### (5)一A类网络的子网掩码为255.255.0.255；它是否为一个有效的子网掩码？ ###
是  10111111   11111111 00000000 11111111
### (6)某个IP地址的十六进制表示C2.2F.14.81，试将其转化为点分十进制的形式。这个地址是哪一类IP地址？ ###
C2   2F 14  81--à(12*16+2).(2*16+15).(16+4).(8*16+1)---à194.47.20.129
C2  2F   14  81  ---à11000010.00101111.00010100.10000001
C类地址
### (7)C类网络使用子网掩码有无实际意义？为什么？ ###
有实际意义.C类子网IP地址的32位中,前24位用于确定网络号,后8位用于确定主机号.如果划分子网,可以选择后8位中的高位,这样做可以进一步划分网络,并且不增加路由表的内容,但是代价是主机数相信减少.
 
### 10.试辨认以下IP地址的网络类别。###
（1）128.36.199.3    
（2）21.12.240.17   
（3）183.194.76.253     
（4）192.12.69.248
（5）89.3.0.1        
（6）200.3.6.2
 (2)和(5)是A类,(1)和(3)是B类,(4)和(6)是C类.

### 当某个路由器发现一IP数据报的检验和有差错时，为什么采取丢弃的办法而不是要求源站重传此数据报？计算首部检验和为什么不采用CRC检验码？ ###
答：纠错控制由上层（传输层）执行
IP首部中的源站地址也可能出错请错误的源地址重传数据报是没有意义的
不采用CRC简化解码计算量，提高路由器的吞吐量

### 设某路由器建立了如下路由表：###
目的网络          子网掩码            下一跳
128.96.39.0      255.255.255.128      接口m0
128.96.39.128    255.255.255.128     接口m1
128.96.40.0      255.255.255.128      R2
192.4.153.0      255.255.255.192      R3
*（默认）         ——             R4
 现共收到5个分组，其目的地址分别为：
（1）128.96.39.10
（2）128.96.40.12
（3）128.96.40.151
（4）192.153.17
（5）192.4.153.90

#####（1）分组的目的站IP地址为：128.96.39.10。先与子网掩码255.255.255.128相与，得128.96.39.0，可见该分组经接口0转发。
#####（2）分组的目的IP地址为：128.96.40.12。
①  与子网掩码255.255.255.128相与得128.96.40.0，不等于128.96.39.0。
②  与子网掩码255.255.255.128相与得128.96.40.0，经查路由表可知，该项分组经R2转发。
#####（3）分组的目的IP地址为：128.96.40.151，与子网掩码255.255.255.128相与后得128.96.40.128，与子网掩码255.255.255.192相与后得128.96.40.128，经查路由表知，该分组转发选择默认路由，经R4转发。
#####（4）分组的目的IP地址为：192.4.153.17。与子网掩码255.255.255.128相与后得192.4.153.0。与子网掩码255.255.255.192相与后得192.4.153.0，经查路由表知，该分组经R3转发。
#####（5）分组的目的IP地址为：192.4.153.90，与子网掩码255.255.255.128相与后得192.4.153.0。与子网掩码255.255.255.192相与后得192.4.153.64，经查路由表知，该分组转发选择默认路由，经R4转发。
 
### 一个大公司有一个总部和三个下属部门。公司分配到的网络前缀是192.77.33/24.公司的网络布局如图4-56示。总部共有五个局域网，其中的LAN1-LAN4都连接到路由器R1上，R1再通过LAN5与路由器R5相连。R5和远地的三个部门的局域网LAN6～LAN8通过广域网相连。每一个局域网旁边标明的数字是局域网上的主机数。试给每一个局域网分配一个合适的网络的前缀。### 
（P380）

### 已知地址块中的一个地址是140.120.84.24/20。试求这个地址块中的最小地址和最大地址。地址掩码是什么？地址块中共有多少个地址？相当于多少个C类地址？ ###
140.120.84.24  è  140.120.(0101 0100).24
最小地址是       140.120.(0101 0000).0/20  (80)
最大地址是       140.120.(0101 1111).255/20 (95)
地址数是4096.相当于16个C类地址。

### 假定网络中的路由器B的路由表有如下的项目（这三列分别表示“目的网络”、“距离”和“下一跳路由器”） ###
N1        7        A
N2        2        B
N6        8        F
N8        4        E
N9        4        F
现在B收到从C发来的路由信息（这两列分别表示“目的网络”“距离”）：
N2        4
N3        8
N6        4
N8        3
N9        5
试求出路由器B更新后的路由表（详细说明每一个步骤）。

##### 路由器B更新后的路由表如下： #####
N1　　　7　　A　　　　无新信息，不改变
N2　　　5　　C　　　　相同的下一跳，更新
N3　　　9　　C　　　　新的项目，添加进来
N6　　　5　　C　　　　不同的下一跳，距离更短，更新
N8　　　4　　E　　　　不同的下一跳，距离一样，不改变
N9　　　4　　F　　　　不同的下一跳，距离更大，不改变