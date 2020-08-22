var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function placeCover(componentKey) {
    return __awaiter(this, void 0, void 0, function* () {
        let page = figma.createPage();
        page.name = "Cover";
        let frame = figma.createFrame();
        frame.name = "Cover";
        page.appendChild(frame);
        let component = yield figma.importComponentByKeyAsync(componentKey);
        let cover = component.createInstance();
        frame.appendChild(cover);
        yield figma.loadFontAsync({ family: "Inter", style: "Bold" });
        let fileName = cover.children[1];
        fileName.characters = figma.root.name;
        frame.resize(cover.width, cover.height);
        const nodes = [];
        nodes.push(frame);
        figma.currentPage = page;
        figma.currentPage.selection = nodes;
        figma.viewport.scrollAndZoomIntoView(nodes);
        figma.closePlugin();
    });
}
switch (figma.command) {
    case "1":
        placeCover("6d5c8f9f37f810cb772a64fef553b8898ffe4a02");
        break;
    case "2":
        placeCover("83401865c74fdb1c649a13d0bb7a1fe63e486ba4");
        break;
    case "3":
        placeCover("b21c25b38d710481183b78665a8037beb6588f52");
        break;
    case "4":
        placeCover("0501cb08bd8a164f6952f8ec1077fbe9cc85f583");
        break;
    case "5":
        placeCover("5b2e7fe664c6101281797afe78d6a57cd1637c05");
        break;
}
