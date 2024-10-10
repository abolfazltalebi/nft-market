export function RankingSection({ items, key, searchTerm }) {
  return items.length > 0 ? (
    <motion.div
      key={key}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-1 gap-6"
    >
      {items.map((nftItem) => (
        <RankingNft
          key={nftItem.id}
          id={nftItem.id}
          image={nftItem.image}
          name={nftItem.name}
          charge={nftItem.charge} // اضافه کردن charge برای سازگاری
          volume={nftItem.volume} // اضافه کردن volume برای سازگاری
          className={searchTerm ? "border-2 border-purple-500" : ""}
        />
      ))}
    </motion.div>
  ) : (
    <div className="text-white">هیچ موردی برای نمایش وجود ندارد.</div>
  );
}
