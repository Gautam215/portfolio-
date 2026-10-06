export function initializePortfolio() {
document.documentElement.classList.add('js');
  const resumeBase64 = "JVBERi0xLjQKJcK1wrYKJSBXcml0dGVuIGJ5IE11UERGIDEuMjguMgoKMSAwIG9iago8PC9UeXBlL0ZvbnQvU3VidHlwZS9UeXBlMS9CYXNlRm9udC9IZWx2ZXRpY2EvRW5jb2RpbmcvV2luQW5zaUVuY29kaW5nL05hbWUvRjE+PgplbmRvYmoKCjIgMCBvYmoKPDwvVHlwZS9Gb250L1N1YnR5cGUvVHlwZTEvQmFzZUZvbnQvSGVsdmV0aWNhLUJvbGQvRW5jb2RpbmcvV2luQW5zaUVuY29kaW5nL05hbWUvRjI+PgplbmRvYmoKCjMgMCBvYmoKPDwvVHlwZS9Bbm5vdC9TdWJ0eXBlL0xpbmsvQTw8L1R5cGUvQWN0aW9uL1MvVVJJL1VSSSh0ZWw6KzkxOTIzNDk1MDYwNCk+Pi9Cb3JkZXJbMCAwIDBdL1JlY3RbMTg2LjExMSA3NzQuNjQ5OCAyNDQuMTIyOCA3ODMuODg5OF0+PgplbmRvYmoKCjQgMCBvYmoKPDwvVHlwZS9Bbm5vdC9TdWJ0eXBlL0xpbmsvQTw8L1R5cGUvQWN0aW9uL1MvVVJJL1VSSShtYWlsdG86YWs5NzI0MDY4QGdtYWlsLmNvbSk+Pi9Cb3JkZXJbMCAwIDBdL1JlY3RbMjUwLjQwNiA3NzQuNjQ5OCAzMzEuNDAyMyA3ODMuODg5OF0+PgplbmRvYmoKCjUgMCBvYmoKPDwvVHlwZS9Bbm5vdC9TdWJ0eXBlL0xpbmsvQTw8L1R5cGUvQWN0aW9uL1MvVVJJL1VSSShodHRwczovL2dpdGh1Yi5jb20vR2F1dGFtMjE1KT4+L0JvcmRlclswIDAgMF0vUmVjdFszMzcuNjg1NSA3NzQuNjQ5OCA0MTcuNzE5MyA3ODMuODg5OF0+PgplbmRvYmoKCjYgMCBvYmoKPDwvVHlwZS9Bbm5vdC9TdWJ0eXBlL0xpbmsvQTw8L1R5cGUvQWN0aW9uL1MvVVJJL1VSSShodHRwczovL2xpbmtlZGluLmNvbS9pbi9nYXV0YW0zMTMpPj4vQm9yZGVyWzAgMCAwXS9SZWN0WzQyNC4wMDI1IDc3NC42NDk4IDUxNS41ODYzIDc4My44ODk4XT4+CmVuZG9iagoKNyAwIG9iago8PC9UeXBlL0Fubm90L1N1YnR5cGUvTGluay9BPDwvVHlwZS9BY3Rpb24vUy9VUkkvVVJJKGh0dHBzOi8vbXVzaWMtYW5kLW1vdmllcy1zaG93LnZlcmNlbC5hcHAvKT4+L0JvcmRlclswIDAgMF0vUmVjdFsyODEuNjcxMyA0OTIuMTQ5OCAzMTkuMzg1OCA1MDIuNTg5OF0+PgplbmRvYmoKCjggMCBvYmoKPDwvVHlwZS9QYWdlL0Fubm90c1szIDAgUiA0IDAgUiA1IDAgUiA2IDAgUiA3IDAgUl0vQ29udGVudHNbMTMgMCBSIDE0IDAgUiAxNSAwIFIgMTcgMCBSIDE4IDAgUiAxOSAwIFIgMjAgMCBSIDIxIDAgUiAyMiAwIFIgMjMgMCBSIDI0IDAgUiAyNSAwIFIgMjYgMCBSIDI3IDAgUiAyOCAwIFIgMjkgMCBSIDMwIDAgUiAzMSAwIFIgMzIgMCBSIDMzIDAgUiAzNCAwIFIgMzUgMCBSIDM2IDAgUiAzNyAwIFIgMzggMCBSIDM5IDAgUiA0MCAwIFIgNDEgMCBSIDQyIDAgUiA0MyAwIFJdL01lZGlhQm94WzAgMCA1OTUuMjc1NiA4NDEuODg5OF0vUGFyZW50IDExIDAgUi9SZXNvdXJjZXM8PC9Gb250PDwvRjIgMiAwIFIvRjEgMSAwIFIvaGVsdiAxMiAwIFIvaGVibyAxNiAwIFI+Pj4+L1JvdGF0ZSAwL1RyYW5zPDw+Pj4+CmVuZG9iagoKOSAwIG9iago8PC9UeXBlL0NhdGFsb2cvUGFnZU1vZGUvVXNlTm9uZS9QYWdlcyAxMSAwIFI+PgplbmRvYmoKCjEwIDAgb2JqCjw8L0F1dGhvcihBQkhJU0hFSyBLVU1BUiBHQVVUQU0pL0NyZWF0aW9uRGF0ZShEOjIwMjYxMDA1MjIxODQ1KzAwJzAwJykvQ3JlYXRvcihcKHVuc3BlY2lmaWVkXCkpL0tleXdvcmRzKCkvTW9kRGF0ZShEOjIwMjYxMDA1MjIxODQ1KzAwJzAwJykvUHJvZHVjZXIoUmVwb3J0TGFiIFBERiBMaWJyYXJ5IC0gXChvcGVuc291cmNlXCkpL1N1YmplY3QoXCh1bnNwZWNpZmllZFwpKS9UaXRsZShBYmhpc2hlayBLdW1hciBHYXV0YW0gLSBSZXN1bWUpL1RyYXBwZWQvRmFsc2U+PgplbmRvYmoKCjExIDAgb2JqCjw8L1R5cGUvUGFnZXMvQ291bnQgMS9LaWRzWzggMCBSXT4+CmVuZG9iagoKMTIgMCBvYmoKPDwvVHlwZS9Gb250L1N1YnR5cGUvVHlwZTEvQmFzZUZvbnQvSGVsdmV0aWNhL0VuY29kaW5nL1dpbkFuc2lFbmNvZGluZz4+CmVuZG9iagoKMTMgMCBvYmoKPDwvTGVuZ3RoIDI1MjcvRmlsdGVyL0ZsYXRlRGVjb2RlPj4Kc3RyZWFtCnicrVhtc5tIEv4r8+kuqXMIzCtUbW2dhCRHie34LPlqr27vAwZkEyPQImTHVfvjt7sHZKwIy3auVIlhGKbfnn66mz+Yx1z4eUxxZnzp+H7gs3hJiy6rrtlw/nHCmeez+YJ53HW0kj4TbD5i7wbDT9PZp/EX9uXydHDBjgeX88Hp+/k3Np6zf7E/nhxtpKP3He0x4xg8mxvcIJjnKDr8uEqjOq3YWZkl0RG7rOuoYudVlKTrG/YnQzHv/hF4LOBCBsrVrqSl9lF0GxguXe3/83oZZbkTl8snz6+z+mZzhcsfj6NNHS25p55syLPiNk2ygrZkxcdr2iU80WOgcvcbCL5zrYUuM2TZ+cXXyXg2m349G5yw2eUp+O4/zaH2zYtj5ijF7uFSsCWTgedwozTc5Gy2K1hD0OTLBI9Hl+FgDnJ/QhrEke+X5rfCthGM8uuyzqI1uyyyu7RaZ/XDEXsurntcK7UmoWI/eHxUHZHpOp7rapRthX+Na8ZdztkHNthc46XeHzitxX7/4eFaWZO449ljh1F8k+ZlxcoFm6fxTVHm5fUDywoWlsvVBg2bxVlaxGmPNOW92H+zKmPhTZTVUfEQNdLg9JuyzI/Yv7N1dHsTraK6iJZHbFAkN1V0yI8g/IAfjcOVkOrRj43zXPDjafRALu2xTLqv8OMsLTLw4iyNyyKJqgc2TjZxVGdlwX5/F+bRes1+m06P2Hl4+vv7HoGeeSnw5+Pw09k0xHT7Mj05mb0S/8/96yikXO6oF1PA53E4f60iHWEy4PtjuQdIp5t1FrO/sdPyLkvXbHZT3gPLnaXfa+fb+ojNH1bpLK6yVX0EW4rrcjRsSfAE8padABP2IAq16A26RZQCPQPThdQsXT2Tj9ITLzYsjCDn1pB6RZFCvp+XVR3loPtFGsXWttMy2eRAMOFsBjmTVnGa95niPcMDjSkaKN57NOTzJkdD5H5DhO7F54+pvoyqGpO9virrfgMu0mTznc2BAG6zuscOFLsXhU9C4vtQxbeGnIIAMKSntAlE78twHY4v5tPJ1FaZn0C3cHuq6aMR7lb9X8yCu1KYQHOtDIfrSC80/FVCBzoBITFwhYTrhU55DM+lxrWFBlzCuoIVzygj4I5rD54EGjod7httr8CtC3piYG/wa4/fD6vcg5+eROCBeyiQuz5IwE6BFpEXErAyhTvQ3Qi4B+31gicSVsEWTnam2sAT/Iv+8cA/6DWhffAOeo3e5L5M4AdJDJ2W6PXACxTuQ16fC/xnaspBGIAhSgsILKdABxh65cLdgow1sGJNx/AiJMDsPtMOKwKmyW4DMkpjtEz1WGbcQ6V4xzJocRcU3MSGSXoKtEdwGkXh83QbcICwEX2WHBaMQTKadxh7kl49Z4t29/c0/VGy6SQAYorS1YNU815vy2HBPVHpoWwOTbz3M5ZIIhpMLkhEXGnwZmhXAr8m5YxBTGofUao8GfdZeFghJRwferYOq0TFcybyYP+JP5L5yXgwGl/MPk3PoXcY/za/GISXFxfT8PJkcPET3M493wleV+AHyyvoCKMEOsY/2bx6WNfs71wcsel0zkZpfpP11ELuBY4Lovj/rxhy1z+UPwG0uW4ncTH0qb4CQEs8VwDQCQwLCwWqOEBNACJYNS5WomYHwcjg+pbFkbvbWoYg0lS/iMKQ8qCCmQBpAiTBdiF4ugdaYIcX6EOMtmOHjK0FCFuUaVysoJikpBc+RT2RbhHyUDtwt+ZIs1oSCest/Jsz4H8gYry2OsNfbROfzsf6g7ZCHae7tob32QRz4kuxPTg7vhwcj98yCnj0g6PtBbwEc5VkoCF61BgYBIQDDaVyAteF2saqlA173gQGU0xymG+hSQ5AooR7rR3wSwCGHHpTGN+RAmXaN4VwjAGZh18UMKs8++LWgVvXgCdh9r3bjnP41UMCRAQoOh/9993uBMyuYRrdwLDPFmW8WacJg+luscnzD+s6im9Zkt7BKL1apgUMHvdZfcNWVfkNG/n0+yqt7BlXmyxPsuIaFFuvymKNA8k9lKNotcozOzGu3/9v/rmFw8vUFhBYsh71hukIzv8c3UXtFNSdiB5b8e3AdFYmKV1ERdJOTA7M3lb5+7K6ZVkR5xsYxdngfAo3dQq+IF2PXq8sdynG1slJVEdAhumHK3AhuDSK43JT1GvS5aosb9GWRV7eo3qbulyC/xNWp+saHliNw+nHcASXOWi+zpKUDa6zPP0IBm+WXdfD3tcr6waObgGxAM0SMhumsvjhKq3WabypsvqB1VWUFaCRw2ZpSjpD1QIgVA8fcoQFW5eL+j4CNALn/4gZAFlV5qnzUv0soWmoCj6US0o1UPCXITa/mOGBDol+gJoNJzJy9USPjSDSQqIa6QnRl+Ij7B4NNsm4oowlOE+PG3JEuhrCuoSdHE6ZwF0AT4nqgd5dousJ0rXGE0M9AgIN6V0Fd0iBeH6AGuB6ezb9DUATxce/vtpw4zlBC3lruEAB8MMmWVpuV1KOpJT8RxWRw58zmxqcgNTnjTnbFgfesI5BeZ4OselBB9OapjZ8QhMY7p40jW1Iq6ANTnKg3RgrCE0mI7qTXdcoONsoqH4Km3/SGuTAzzZnw7c4DHjSfeowLG+NowSXaDZOGB5FeoSxxXK3G/E2drQbi90Ydgf0v6GS1jhe+4g8jK0eYEG1JdLuwEB03Km3qKTphkpmR5tWNpw3MaZpJqwWiKgRBtHKgrsfQ/cGV0nf8VqGsq4CmEKE4cg2WlZFuidhfEIVHbobMGxie4UdBz2qLbZOVdZM6ooCm6JiCPJGhC04yaKXBqWJTWWLBkN4JheqBp+UztRD2VD5OmjfM8GTxLOZgm7nZI/cDfTb3CY0VaFgNyU1TaeKYiRpcAe1pY/gJhSKNplorBc4BVJi4AQ77MZbUaJqxEVICawoKBMTtGEh5zWTJOLAfg6BPbgjeMQS4R7dqJApG3xOIA88aDLdhjXxqf2MIqh9I9wC2NwGm9Y6+TZnuXKHuJXFzbAB/2N6eIgdiV9rCNQNsXrIYVZp3VC+fp7yUd2QMGzoFPx+wuk5OQn79NY9ipME7GGb9N1iB5GJvBRiN4vhgoHvLQ4QAd8l8E7lIhMUjQrcGt1RyZoysgbauDdpYSl+TOkRNHxk684jtbvNh6+WKcaNCzrpZ5OqTfLtgLB11dYZXQTaNApMy0tP0foGByl/X4XDCKJTJi28d9FyCB8WTZAg5EBEQZuYlHSebRywsFPaiK4Td+Tsx1lg+RGeaqpWqhOakU04mn/Cxqld8sZTBsRob3CYNLsVbkSRonjvGPiUHDt1rcdw3NuwSedbBzkOcOpTxZtQeIYWA43rMUzGdjpoGGGGvqmQUxA5pmPqX1VdOHcKZW5kc3RyZWFtCmVuZG9iagoKMTQgMCBvYmoKPDwvTGVuZ3RoIDg3L0ZpbHRlci9GbGF0ZURlY29kZT4+CnN0cmVhbQp42n2MIRKAMAwE/b3iXpBJ2qZtLAYNf2DAwv8F7eCZM7tiDzeqitNTlt6js0QZGi5JVY3PgQvGuX3lB8/JBRtww00KrdpMW6NrlkrL4hHj6qd9AXg3F38KZW5kc3RyZWFtCmVuZG9iagoKMTUgMCBvYmoKPDwvTGVuZ3RoIDY1L0ZpbHRlci9GbGF0ZURlY29kZT4+CnN0cmVhbQp4nOMq5HIK4TJUMABCQwUzIDKw0LM0tjS3UAjJ5dLPSM0pU7DQMzVVCElTiLZJMjcysIsN8eJyDeEK5AIAf3cNVQplbmRzdHJlYW0KZW5kb2JqCgoxNiAwIG9iago8PC9UeXBlL0ZvbnQvU3VidHlwZS9UeXBlMS9CYXNlRm9udC9IZWx2ZXRpY2EtQm9sZC9FbmNvZGluZy9XaW5BbnNpRW5jb2Rpbmc+PgplbmRvYmoKCjE3IDAgb2JqCjw8L0xlbmd0aCAxMTEvRmlsdGVyL0ZsYXRlRGVjb2RlPj4Kc3RyZWFtCnjaDYk9CkJBDAb7nCInWLPZly8bEAvBxk5IJxb+vIeNiPdvDANTzNCPjkmdpegMtIFYGDJbjPDJ+aHde318eTYzzo2vexNXbPByx6sIrHAVhYp1N5irh8ryrF+nSodXHeOucrjlmU5JF/oDfDkbWQplbmRzdHJlYW0KZW5kb2JqCgoxOCAwIG9iago8PC9MZW5ndGggMTI1L0ZpbHRlci9GbGF0ZURlY29kZT4+CnN0cmVhbQp42l2LvQrCQBCE+32KfYJzf25370AsBBs74Tqx0JBgoUWaPL9nMI0MDN8MMzDDsQEjdTEKU1KxMHQqqWqNgu0Nu+f4WrAkM2wTXvf57hzubOoa4jUosgxClqOz23+/7VfWnz+6vh/qn+zFJx/XrMZ5ONzaGU4NLvABEEUkBQplbmRzdHJlYW0KZW5kb2JqCgoxOSAwIG9iago8PC9MZW5ndGggNjUvRmlsdGVyL0ZsYXRlRGVjb2RlPj4Kc3RyZWFtCnic4yrkcgrhMlQwAEJDBTNDBVNLcz0DY0sLhZBcLv2M1JwyBQs9U1OFkDSFaJskcyMDu9gQLy7XEK5ALgBzJA0cCmVuZHN0cmVhbQplbmRvYmoKCjIwIDAgb2JqCjw8L0xlbmd0aCAxMDMvRmlsdGVyL0ZsYXRlRGVjb2RlPj4Kc3RyZWFtCnjaFYixCsMwDAV3fYW+wJVt+SmGkKHQpVtBW+nQJDZdSsn/L3W45e7ooKtTZBlEBkJGVS7VguQ6sX/p8mnrj6dQCnvn56ywhI5mioIGTaLDDKM2dBPs5zfN7yTLy+90c3rQH6jpF6gKZW5kc3RyZWFtCmVuZG9iagoKMjEgMCBvYmoKPDwvTGVuZ3RoIDE2Mi9GaWx0ZXIvRmxhdGVEZWNvZGU+PgpzdHJlYW0KeNpNjL0KQjEMhfc+RZ/g2jY5SQviILi4Cd3EQWsvDjq4+PzmFhU5EMJ3ftzTbauLPpiij8KThlTEo+gUqGRfH2516/eXzxPg6+yPa85gvnIjpJYCE0xEy48kkCiknLqcdTDuAs3/BGyZIk3Vbhf+bvwWWK0xcrOpyUWK9T+ukgajXcmoCIyqdZKt8OLapkofaXBJM4C8OdW921V3cG9idzZwCmVuZHN0cmVhbQplbmRvYmoKCjIyIDAgb2JqCjw8L0xlbmd0aCA2NS9GaWx0ZXIvRmxhdGVEZWNvZGU+PgpzdHJlYW0KeJzjKuRyCuEyVDAAQkMFM0MFUwtTPUNjSwuFkFwu/YzUnDIFCz1TU4WQNIVomyRzIwO72BAvLtcQrkAuAHLRDRoKZW5kc3RyZWFtCmVuZG9iagoKMjMgMCBvYmoKPDwvTGVuZ3RoIDEwMS9GaWx0ZXIvRmxhdGVEZWNvZGU+PgpzdHJlYW0KeNoVyDsKhUAMRuE+q8gKxnkk/4wgtxBs7IR0YuETGxH331zlVN+hh1qjwP4tMOASamEt6kKqC9tF1bkvNxenynbw2EhEQMICxQ6JXgSa8WrFkT2272dJc/S/yXrqjAb6A3BtFv8KZW5kc3RyZWFtCmVuZG9iagoKMjQgMCBvYmoKPDwvTGVuZ3RoIDE2MS9GaWx0ZXIvRmxhdGVEZWNvZGU+PgpzdHJlYW0KeNo9jbEOwjAMRPd8Rb6gJLbPTiTEgMTChpQNMVQlFQMMLHw/pq2Qh7Pu3unCOxxbyDH55ZiVB6pEEQVD5lpie4Xdoz8/sQxAbHO87qXrrKKgrqMxTZQEViwZKYzd+fsgARjiREaSutEjbPUMJloU2l2rsuZFZ+1r27/Jd+5CnrBzS8s53paS8I82sYWlRMU3SbIw1cOtncOphUv4Av+IM4EKZW5kc3RyZWFtCmVuZG9iagoKMjUgMCBvYmoKPDwvTGVuZ3RoIDY2L0ZpbHRlci9GbGF0ZURlY29kZT4+CnN0cmVhbQp4nOMq5HIK4TJUMABCQwUzQwVTc2M9I2NLc3OFkFwu/YzUnDIFCz1TU4WQNIVomyRzIwO72BAvLtcQrkAuAH5xDU4KZW5kc3RyZWFtCmVuZG9iagoKMjYgMCBvYmoKPDwvTGVuZ3RoIDg1L0ZpbHRlci9GbGF0ZURlY29kZT4+CnN0cmVhbQp4nOMq5HIK4TJUMABCQwUzMz1jM0sTBVNzYz0jY0tzc4WQXC79jNSkfAULPVNThZA0hWgbExMzQ3MgNjMC0sZmQLXGiUYGdrEhXlyuIVyBXADYKxHwCmVuZHN0cmVhbQplbmRvYmoKCjI3IDAgb2JqCjw8L0xlbmd0aCAxMzgvRmlsdGVyL0ZsYXRlRGVjb2RlPj4Kc3RyZWFtCnjaHY09DsIwDIV3nyInKLFjPxMJdUBiYUPKhhhQ2ogBBhbOj1tZXr73R186N+KU4zgx61SQzZJ5maRU99Q+dHit7186TsHbSPeTLhhY4RiqKtIl63ABo6DDJFsx1r5zBXs8QvWyaUGiGzXS6+YwdgsiXveWHO6KBdWfe7JuS/OjXenS6EZ/YiQnowplbmRzdHJlYW0KZW5kb2JqCgoyOCAwIG9iago8PC9MZW5ndGggNjUvRmlsdGVyL0ZsYXRlRGVjb2RlPj4Kc3RyZWFtCnic4yrkcgrhMlQwAEJDBTNDBVMzQz1jY0sLhZBcLv2M1JwyBQs9U1OFkDSFaJskcyMDu9gQLy7XEK5ALgByKw0WCmVuZHN0cmVhbQplbmRvYmoKCjI5IDAgb2JqCjw8L0xlbmd0aCA5My9GaWx0ZXIvRmxhdGVEZWNvZGU+PgpzdHJlYW0KeJwNwjsKgDAMANA9p8gJatp8qiAOgoubkE0cVCwuIt5/sbwHH4wOEamKaBbYOkG1GJi7Fv2B5r6OF9ugil5w7UVMs0nJlDlRskQqVqozM++Jhs1nmBwW+AGRTRSECmVuZHN0cmVhbQplbmRvYmoKCjMwIDAgb2JqCjw8L0xlbmd0aCAxNDUvRmlsdGVyL0ZsYXRlRGVjb2RlPj4Kc3RyZWFtCnjaZYw7DgIxDAV7nyInWBJ/nhMJUSDR0CGlQzQsG1FAQcP5SXZLZMnys8dDHzpWSiH2SiGJTxCBBUOaREoO9U275/L6hjyZhdrCda+O4sozx23S7AZes6JBcIc5/92jJogrSmcWF46cVbRw6125DN4img/mgYRl3WC4utMwb9n6p0p3KOxwq2c6VbrQD0VbLL4KZW5kc3RyZWFtCmVuZG9iagoKMzEgMCBvYmoKPDwvTGVuZ3RoIDY2L0ZpbHRlci9GbGF0ZURlY29kZT4+CnN0cmVhbQp4nOMq5HIK4TJUMABCQwUzQwVTE0s9E2NLcwuFkFwu/YzUnDIFCz1TU4WQNIVomyRzIwO72BAvLtcQrkAuAH9aDVQKZW5kc3RyZWFtCmVuZG9iagoKMzIgMCBvYmoKPDwvTGVuZ3RoIDkxL0ZpbHRlci9GbGF0ZURlY29kZT4+CnN0cmVhbQp4nA3GOwqAMAwA0D2nyAmqNr8GxEFwcROyiYOC4iLi/RfLWx58MAZ02FYdqiZSZxT2xORWMB5o7vN4sSQRjAvXnslcs4plIxUlq1M3Nqc9t8MWM0wBC/xwthO3CmVuZHN0cmVhbQplbmRvYmoKCjMzIDAgb2JqCjw8L0xlbmd0aCAxNDYvRmlsdGVyL0ZsYXRlRGVjb2RlPj4Kc3RyZWFtCnjaLY27CkIxDED3fEW+oDZtHi3IHQQXN6GbuHhpcdDBxe83LRISEnJOAh84NSCMHoSUSlDKjMI1cK5WsL3h8OyvL5Yggm3g7Sim1ZKKZS1K3j3SnqJki7qbaP/PrGVSTnCKzM57avZadWhfTPJL2fnI5B65P2fPueU+HTMd64d/WL7YtNjqdm8XODe4wg8MhiyBCmVuZHN0cmVhbQplbmRvYmoKCjM0IDAgb2JqCjw8L0xlbmd0aCA2NS9GaWx0ZXIvRmxhdGVEZWNvZGU+PgpzdHJlYW0KeJzjKuRyCuEyVDAAQkMFM0MFU2NzPVNjSwuFkFwu/YzUnDIFCz1TU4WQNIVomyRzIwO72BAvLtcQrkAuAHLsDRsKZW5kc3RyZWFtCmVuZG9iagoKMzUgMCBvYmoKPDwvTGVuZ3RoIDk3L0ZpbHRlci9GbGF0ZURlY29kZT4+CnN0cmVhbQp42g3FMQqAMAwF0D2nyAlq2zQ/FsRBcHETsomDguIi4v0X5Q2PXhqcEsdfYiAIamEVCyq1Zb+puY794Taosp+8dCo4AStmSJahOWr8TxArqBCoiWw59qtPNDrN9AEu5RWqCmVuZHN0cmVhbQplbmRvYmoKCjM2IDAgb2JqCjw8L0xlbmd0aCAxNjYvRmlsdGVyL0ZsYXRlRGVjb2RlPj4Kc3RyZWFtCnjaLY6xDkIhDEV3voIveAJtbyExDiYubiZsxokHcdDBxe+3EMMAbc89xX3cubrog53oI+ctlJzFC+kmVLKvb3d49tfX503E1+HvR45QFDRIGkIgTSrYU0vBqgEoqyJqsnlghiggRg8N2O3Vla3fzIBFkBbQsoWUhZi5MaWyfEajTF6mh5Qt1aFzNs2Ym3X95t+dnNnyzNkd0U6PenWX6m7uB1syNSQKZW5kc3RyZWFtCmVuZG9iagoKMzcgMCBvYmoKPDwvTGVuZ3RoIDEwOS9GaWx0ZXIvRmxhdGVEZWNvZGU+PgpzdHJlYW0KeNpFyrEKAkEMhOE+T5EnODfZZPYWxEKwsRPSidXdLhZa2Pj8ppOfaT6GPnQOEi6ZMIRdsfTa28rxpsNzvL68Lu4ck+9HM0zU5tjhGM0guZ42dNPilirYtVhN2zKBYjb9/06PuNIl6EY/mT8cZAplbmRzdHJlYW0KZW5kb2JqCgozOCAwIG9iago8PC9MZW5ndGggNjYvRmlsdGVyL0ZsYXRlRGVjb2RlPj4Kc3RyZWFtCnic4yrkcgrhMlQwAEJDBVMjBUMzUz1TY0tzc4WQXC79jNScMgULPTNThZA0hWibJHMjA7vYEC8u1xCuQC4AfncNTwplbmRzdHJlYW0KZW5kb2JqCgozOSAwIG9iago8PC9MZW5ndGggOTAvRmlsdGVyL0ZsYXRlRGVjb2RlPj4Kc3RyZWFtCnicDcYtDoAwDAZQ31P0BGN//bolBEGCwZHUEeQIAgSG87M88+il2Siw7wKLuqQcIE5SVWV7aLja/XFxELaT9zEXVDRk1OhjyQ1B+xWQWKfDVlqMNvoBMNoTKQplbmRzdHJlYW0KZW5kb2JqCgo0MCAwIG9iago8PC9MZW5ndGggNjYvRmlsdGVyL0ZsYXRlRGVjb2RlPj4Kc3RyZWFtCnic4yrkcgrhMlQwAEJDBVMjBUNTYz0zY0tzc4WQXC79jNScMgULPTNThZA0hWibJHMjA7vYEC8u1xCuQC4AfiINTQplbmRzdHJlYW0KZW5kb2JqCgo0MSAwIG9iago8PC9MZW5ndGggMTAzL0ZpbHRlci9GbGF0ZURlY29kZT4+CnN0cmVhbQp42hXIMQoCQQwF0D6nyAnGzWTy/wyIhWBjJ6QTq2UWCy1sPL8rr3vykXOK6bIzDRanWniBD1LzLYfnfH21F4TmpvdjC0wQKwYdvS61N8eGSSBY9zM2jP/AsNZxeuRVLik3+QHvFhg4CmVuZHN0cmVhbQplbmRvYmoKCjQyIDAgb2JqCjw8L0xlbmd0aCA2Ni9GaWx0ZXIvRmxhdGVEZWNvZGU+PgpzdHJlYW0KeJzjKuRyCuEyVDAAQkMFUyMFQxNDPXNjS3MLhZBcLv2M1JwyBQs9M1OFkDSFaJskcyMDu9gQLy7XEK5ALgB98A1MCmVuZHN0cmVhbQplbmRvYmoKCjQzIDAgb2JqCjw8L0xlbmd0aCA5NC9GaWx0ZXIvRmxhdGVEZWNvZGU+PgpzdHJlYW0KeJwVyCEOgDAMQFHfU/QEY+3WdksIggSDI6kjyBEECAznB/LV+3DD6EAYvwjFQjKkTMFStYJ+QXe088ESVNB3XPusxiraNGnhyCX/Mq3faSrGXIfNZ5gcFngBpccUjAplbmRzdHJlYW0KZW5kb2JqCgp4cmVmCjAgNDQKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDQyIDAwMDAwIG4gCjAwMDAwMDAxMzkgMDAwMDAgbiAKMDAwMDAwMDI0MSAwMDAwMCBuIAowMDAwMDAwMzg4IDAwMDAwIG4gCjAwMDAwMDA1NDQgMDAwMDAgbiAKMDAwMDAwMDcwMyAwMDAwMCBuIAowMDAwMDAwODY3IDAwMDAwIG4gCjAwMDAwMDEwMzkgMDAwMDAgbiAKMDAwMDAwMTQ1OCAwMDAwMCBuIAowMDAwMDAxNTIyIDAwMDAwIG4gCjAwMDAwMDE4MDcgMDAwMDAgbiAKMDAwMDAwMTg2MCAwMDAwMCBuIAowMDAwMDAxOTUwIDAwMDAwIG4gCjAwMDAwMDQ1NDggMDAwMDAgbiAKMDAwMDAwNDcwNCAwMDAwMCBuIAowMDAwMDA0ODM4IDAwMDAwIG4gCjAwMDAwMDQ5MzMgMDAwMDAgbiAKMDAwMDAwNTExNCAwMDAwMCBuIAowMDAwMDA1MzA5IDAwMDAwIG4gCjAwMDAwMDU0NDMgMDAwMDAgbiAKMDAwMDAwNTYxNiAwMDAwMCBuIAowMDAwMDA1ODQ4IDAwMDAwIG4gCjAwMDAwMDU5ODIgMDAwMDAgbiAKMDAwMDAwNjE1MyAwMDAwMCBuIAowMDAwMDA2Mzg0IDAwMDAwIG4gCjAwMDAwMDY1MTkgMDAwMDAgbiAKMDAwMDAwNjY3MyAwMDAwMCBuIAowMDAwMDA2ODgxIDAwMDAwIG4gCjAwMDAwMDcwMTUgMDAwMDAgbiAKMDAwMDAwNzE3NyAwMDAwMCBuIAowMDAwMDA3MzkyIDAwMDAwIG4gCjAwMDAwMDc1MjcgMDAwMDAgbiAKMDAwMDAwNzY4NyAwMDAwMCBuIAowMDAwMDA3OTAzIDAwMDAwIG4gCjAwMDAwMDgwMzcgMDAwMDAgbiAKMDAwMDAwODIwMyAwMDAwMCBuIAowMDAwMDA4NDM5IDAwMDAwIG4gCjAwMDAwMDg2MTggMDAwMDAgbiAKMDAwMDAwODc1MyAwMDAwMCBuIAowMDAwMDA4OTEyIDAwMDAwIG4gCjAwMDAwMDkwNDcgMDAwMDAgbiAKMDAwMDAwOTIyMCAwMDAwMCBuIAowMDAwMDA5MzU1IDAwMDAwIG4gCgp0cmFpbGVyCjw8L1NpemUgNDQvSW5mbyAxMCAwIFIvUm9vdCA5IDAgUi9JRFs8RUY5MjE5RkJFMDFGNjI0Qjg4RTJFRDM3NDI4NUY2OUY+PEM3RENDMEQ4NDI0NkY3RUVDNEJGMkRGMzJEOUZBNzE1Pl0+PgpzdGFydHhyZWYKOTUxOAolJUVPRgo=";
  const resumeBlob = () => {
    const bytes = Uint8Array.from(atob(resumeBase64), char => char.charCodeAt(0));
    return URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }));
  };
  document.querySelectorAll('[data-resume-download]').forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
    const url = resumeBlob();
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'Abhishek-Gautam-Resume.pdf';
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 60000);
  }));
  document.querySelectorAll('[data-resume-view]').forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
    const url = resumeBlob();
    window.open(url, '_blank', 'noopener,noreferrer');
    setTimeout(() => URL.revokeObjectURL(url), 60000);
  }));

  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const setMenu = open => {
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    mobileMenu.classList.toggle('open', open);
    mobileMenu.hidden = !open;
  };
  menuToggle.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
  mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));

  const topbar = document.getElementById('topbar');
  const onScroll = () => topbar.classList.toggle('scrolled', window.scrollY > 12);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  const sections = [...document.querySelectorAll('main section[id]')];
  const navLinks = [...document.querySelectorAll('.nav-links a[href^="#"], .mobile-menu a[href^="#"]')];
  const activeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        const active = link.getAttribute('href') === `#${entry.target.id}`;
        if (active) link.classList.add('active'); else link.classList.remove('active');
        if (link.closest('.nav-links')) {
          if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
        }
      });
    });
  }, { rootMargin: '-28% 0px -62% 0px' });
  sections.forEach(section => activeObserver.observe(section));

  const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); }
  }), { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
  document.querySelectorAll('.reveal').forEach(item => revealObserver.observe(item));

  document.querySelectorAll('[data-skill-filter]').forEach(button => button.addEventListener('click', () => {
    const value = button.dataset.skillFilter;
    document.querySelectorAll('[data-skill-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.querySelectorAll('.skill-card').forEach(card => { card.hidden = value !== 'all' && card.dataset.skill !== value; });
  }));
  document.querySelectorAll('[data-project-filter]').forEach(button => button.addEventListener('click', () => {
    const value = button.dataset.projectFilter;
    document.querySelectorAll('[data-project-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.querySelectorAll('.project-card').forEach(card => { card.hidden = value !== 'all' && card.dataset.project !== value; });
  }));

  document.querySelectorAll('[data-play-tab]').forEach(tab => tab.addEventListener('click', () => {
    const selected = tab.dataset.playTab;
    document.querySelectorAll('[data-play-tab]').forEach(item => item.setAttribute('aria-selected', String(item === tab)));
    document.querySelectorAll('[data-demo-panel]').forEach(item => { item.hidden = item.dataset.demoPanel !== selected; });
    document.getElementById('play-state').textContent = `${selected === 'components' ? 'Components' : 'States'} / ready`;
  }));
  document.querySelectorAll('[data-demo-panel="states"]').forEach(item => { item.hidden = true; });

  const sampleToggle = document.getElementById('sample-toggle');
  sampleToggle.addEventListener('click', () => {
    const on = sampleToggle.getAttribute('aria-checked') !== 'true';
    sampleToggle.setAttribute('aria-checked', String(on));
    document.getElementById('toggle-label').textContent = on ? 'On' : 'Off';
    document.getElementById('play-state').textContent = on ? 'Toggle / on' : 'Components / ready';
  });

  const compareControl = document.getElementById('compare-control');
  const compareStage = document.getElementById('compare-stage');
  compareControl.addEventListener('input', () => compareStage.style.setProperty('--split', `${compareControl.value}%`));

  const modal = document.getElementById('demo-modal');
  const openModal = document.getElementById('open-modal');
  const closeModal = document.getElementById('close-modal');
  let previousFocus = null;
  const hideModal = () => { modal.hidden = true; previousFocus?.focus(); };
  openModal.addEventListener('click', () => { previousFocus = document.activeElement; modal.hidden = false; closeModal.focus(); });
  closeModal.addEventListener('click', hideModal);
  modal.addEventListener('click', event => { if (event.target === modal) hideModal(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !modal.hidden) hideModal(); });

  document.querySelectorAll('[data-toast]').forEach(button => button.addEventListener('click', () => {
    document.getElementById('toast-status').textContent = button.dataset.toast;
    document.getElementById('play-state').textContent = 'Button / active';
  }));

  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const form = new FormData(contactForm);
    const subject = encodeURIComponent(`Portfolio message from ${form.get('name')}`);
    const body = encodeURIComponent(`Name: ${form.get('name')}\nEmail: ${form.get('email')}\n\n${form.get('message')}`);
    formStatus.classList.remove('error');
    formStatus.textContent = 'Preparing your email...';
    setTimeout(() => {
      window.location.href = `mailto:ak9724068@gmail.com?subject=${subject}&body=${body}`;
      formStatus.textContent = 'Your email app should open with this message. Send it there to complete contact.';
    }, 180);
  });

  const stage = document.getElementById('portrait-stage');
  const finePointer = window.matchMedia('(pointer:fine) and (min-width: 900px)');
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorRing = document.querySelector('.cursor-ring');
  if (finePointer.matches) {
     let pointerFrame = 0;
     window.addEventListener('pointermove', event => {
       document.body.classList.add('cursor-ready');
       if (pointerFrame) return;
      pointerFrame = requestAnimationFrame(() => {
        pointerFrame = 0;
        cursorDot.style.transform = `translate(${event.clientX - 2.5}px,${event.clientY - 2.5}px)`;
        cursorRing.style.transform = `translate(${event.clientX - 16}px,${event.clientY - 16}px)`;
      });
    }, { passive: true });
    document.querySelectorAll('a,button,input,textarea,select,summary,.skill-card,.project-card').forEach(item => {
      item.addEventListener('pointerenter', () => document.body.classList.add('cursor-hover'));
      item.addEventListener('pointerleave', () => document.body.classList.remove('cursor-hover'));
    });
    stage.addEventListener('pointermove', event => {
      const bounds = stage.getBoundingClientRect();
      const x = (event.clientX - bounds.left - bounds.width / 2) / bounds.width;
      const y = (event.clientY - bounds.top - bounds.height / 2) / bounds.height;
      stage.style.transform = `translate3d(${x * 5}px,${y * 5}px,0)`;
    });
    stage.addEventListener('pointerleave', () => { stage.style.transform = ''; });
  }
}
