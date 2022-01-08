/**
 * 路由组件出口文件
 * yezi 2018年6月24日
 */
import Loadable from 'react-loadable';
import Loading from './widget/Loading';
import BasicTable from './tables/BasicTables';
import AdvancedTable from './tables/AdvancedTables';
import AsynchronousTable from './tables/AsynchronousTable';
import Echarts from './charts/Echarts';
import Recharts from './charts/Recharts';
import Icons from './ui/Icons';
import Buttons from './ui/Buttons';
import Spins from './ui/Spins';
import Modals from './ui/Modals';
import Notifications from './ui/Notifications';
import Tabs from './ui/Tabs';
import Banners from './ui/banners';
import Drags from './ui/Draggable';
import Dashboard from './dashboard/Dashboard';
import Gallery from './ui/Gallery';
import BasicAnimations from './animation/BasicAnimations';
import ExampleAnimations from './animation/ExampleAnimations';
import AuthBasic from './auth/Basic';
import RouterEnter from './auth/RouterEnter';
import Cssmodule from './cssmodule';
import MapUi from './ui/map';
import QueryParams from './extension/QueryParams';
import Visitor from './extension/Visitor';
import MultipleMenu from './extension/MultipleMenu';
import Sub1 from './smenu/Sub1';
import Sub2 from './smenu/Sub2';
import SmenuSub3 from './smenu/Sub3';
import Sub3 from './path/Sub3';
import Success from './result/Success'
import Env from './env';
import Airport from './path/Airport';
// 多特征
import UpPic from './multifeatureanalysis/UpPic';
import PicChoose from './multifeatureanalysis/PicChoose';
import GrayFeature from './multifeatureanalysis/GrayFeature';
import EdgeFeature from './multifeatureanalysis/EdgeFeature';
import ThreeDimensionalFeatureReconstruction from './multifeatureanalysis/ThreeDimensionalFeatureReconstruction';
// 高光谱
import RegionalAverageSpectrumExtraction from './hyperspectral/RegionalAverageSpectrumExtraction';
import SuperPixelSegmentation from './hyperspectral/SuperPixelSegmentation'
import SmallSampleSegmentation from './smallsamplesegmentation/SmallSampleSegmentation'
import ColorFeatures from './visiblelight/ColorFeatures'
import TextureFeatures from './visiblelight/TextureFeatures'


const WysiwygBundle = Loadable({
    // 按需加载富文本配置
    loader: () => import('./ui/Wysiwyg'),
    loading: Loading,
});

export default {
    BasicTable,
    AdvancedTable,
    AsynchronousTable,
    Echarts,
    Recharts,
    Icons,
    Buttons,
    Spins,
    Modals,
    Notifications,
    Tabs,
    Banners,
    Drags,
    Dashboard,
    Gallery,
    BasicAnimations,
    ExampleAnimations,
    AuthBasic,
    RouterEnter,
    WysiwygBundle,
    Cssmodule,
    MapUi,
    QueryParams,
    Visitor,
    MultipleMenu,
    Sub1,
    Sub2,
    SmenuSub3,
    Sub3,
    Success,
    Airport,
    Env,
    UpPic,
    PicChoose,
    GrayFeature,
    EdgeFeature,
    ThreeDimensionalFeatureReconstruction,
    RegionalAverageSpectrumExtraction,
    SuperPixelSegmentation,
    SmallSampleSegmentation,
    ColorFeatures,
    TextureFeatures,
} as any;
