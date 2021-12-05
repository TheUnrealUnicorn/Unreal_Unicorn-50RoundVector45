exports.mod = (mod_data) => {
    let base = fileIO.readParsed(global.db.user.cache.items);

    for (let file in base.data) {
        let fileData = base.data[file];
        if (fileData._id === "5fb64bc92b1b027b1f50bcf2") {
            fileData._props.Slots[0]._props.filters[0].Filter.push("50RoundVector45");
        }
    }
    fileIO.write(global.db.user.cache.items, base);
    logger.logSuccess(`[MOD] 50RoundVector45 Applied`);
}