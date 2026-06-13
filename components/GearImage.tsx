// 商品画像の表示。src がリモートURL(楽天)なら<img>でホットリンク、ローカルパス(自前イラスト)なら
// next/image、無ければ線画アイコンにフォールバックする。lib/productImages.ts の gearImageSrc と併用。
import Image from "next/image";
import { LineIcon, type IconName } from "@/components/icons";

export default function GearImage({
  src,
  alt,
  icon,
  size = 64,
}: {
  src: string | null;
  alt: string;
  icon: IconName;
  size?: number;
}) {
  const box: React.CSSProperties = { width: size, height: size, objectFit: "contain" };
  if (src) {
    if (src.startsWith("http")) {
      // 楽天等のリモート画像（再ホストせずホットリンク）
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={src} alt={alt} width={size} height={size} style={box} loading="lazy" />;
    }
    return <Image src={src} alt={alt} width={size} height={size} style={box} />;
  }
  return <LineIcon name={icon} size={Math.round(size * 0.55)} style={{ color: "var(--navy)" }} />;
}
