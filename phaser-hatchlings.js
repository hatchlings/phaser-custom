/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2023 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

require('polyfills');

var CONST = require('const');
var Extend = require('utils/object/Extend');

/**
 * @namespace Phaser
 */

var Phaser = {

    Actions: require('actions'),
    Animations: require('animations'),
    // BlendModes: require('renderer/BlendModes'),
    Cache: require('cache'),
    Cameras: {
        Scene2D: require('cameras/2d')
    },
    Core: require('core'),
    Class: require('utils/Class'),
    Create: require('create'),
    // Curves: require('curves'),
    // Data: require('data'),
    Display: require('display'),
    // DOM: require('dom'),
    Events: require('events/index'),
    // FX: require('fx'),
    Game: require('core/Game'),
    GameObjects: {
        DisplayList: require('gameobjects/DisplayList'),
        GameObjectCreator: require('gameobjects/GameObjectCreator'),
        GameObjectFactory: require('gameobjects/GameObjectFactory'),
        UpdateList: require('gameobjects/UpdateList'),
        Components: require('gameobjects/components'),
        BuildGameObject: require('gameobjects/BuildGameObject'),
        BuildGameObjectAnimation: require('gameobjects/BuildGameObjectAnimation'),
        GameObject: require('gameobjects/GameObject'),
        Graphics: require('gameobjects/graphics/Graphics'),
        Group: require('gameobjects/group/Group'),
        Image: require('gameobjects/image/Image'),
        Layer: require('gameobjects/layer/Layer'),
        Particles: require('gameobjects/particles'),
        Sprite: require('gameobjects/sprite/Sprite'),
        Text: require('gameobjects/text/Text'),
        Factories: {
            Graphics: require('gameobjects/graphics/GraphicsFactory'),
            Group: require('gameobjects/group/GroupFactory'),
            Image: require('gameobjects/image/ImageFactory'),
            Layer: require('gameobjects/layer/LayerFactory'),
            Sprite: require('gameobjects/sprite/SpriteFactory'),
            Text: require('gameobjects/text/TextFactory'),
        },
        Creators: {
            Graphics: require('gameobjects/graphics/GraphicsCreator'),
            Group: require('gameobjects/group/GroupCreator'),
            Image: require('gameobjects/image/ImageCreator'),
            Layer: require('gameobjects/layer/LayerCreator'),
            Sprite: require('gameobjects/sprite/SpriteCreator'),
            Text: require('gameobjects/text/TextCreator'),
        }
    },
    // Geom: require('geom'),
    Input: require('input'),
    Loader: {
        FileTypes: {
            AnimationJSONFile: require('loader/filetypes/AnimationJSONFile'),
            AtlasJSONFile: require('loader/filetypes/AtlasJSONFile'),
            AudioFile: require('loader/filetypes/AudioFile'),
            AudioSpriteFile: require('loader/filetypes/AudioSpriteFile'),
            HTML5AudioFile: require('loader/filetypes/HTML5AudioFile'),
            ImageFile: require('loader/filetypes/ImageFile'),
            JSONFile: require('loader/filetypes/JSONFile'),
            MultiAtlasFile: require('loader/filetypes/MultiAtlasFile'),
            // PluginFile: require('loader/filetypes/PluginFile'),
            // ScriptFile: require('loader/filetypes/ScriptFile'),
            SpriteSheetFile: require('loader/filetypes/SpriteSheetFile'),
            // TextFile: require('loader/filetypes/TextFile'),
            // XMLFile: require('loader/filetypes/XMLFile')
        },
        File: require('loader/File'),
        FileTypesManager: require('loader/FileTypesManager'),
        GetURL: require('loader/GetURL'),
        LoaderPlugin: require('loader/LoaderPlugin'),
        MergeXHRSettings: require('loader/MergeXHRSettings'),
        MultiFile: require('loader/MultiFile'),
        XHRLoader: require('loader/XHRLoader'),
        XHRSettings: require('loader/XHRSettings')
    },
    Math: require('math'),
    Physics: {
        Arcade: require('physics/arcade')
    },
    Plugins: require('plugins'),
    Renderer: require('renderer'),
    Scale: require('scale'),
    ScaleModes: require('renderer/ScaleModes'),
    Scene: require('scene/Scene'),
    Scenes: require('scene'),
    // Structs: require('structs'),
    Textures: require('textures'),
    // Tilemaps: require('tilemaps'),
    Time: require('time'),
    Tweens: require('tweens'),
    Utils: require('utils')

};

//  Merge in the optional plugins and WebGL only features

if (typeof FEATURE_SOUND)
{
    Phaser.Sound = require('sound');
}

//   Merge in the consts

Phaser = Extend(false, Phaser, CONST);

/**
 * The root types namespace.
 *
 * @namespace Phaser.Types
 * @since 3.17.0
 */

//  Export it

module.exports = Phaser;

global.Phaser = Phaser;

/*
 * "Documentation is like pizza: when it is good, it is very, very good;
 * and when it is bad, it is better than nothing."
 *  -- Dick Brandon
 */
