'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _extends = _interopDefault(require('@babel/runtime/helpers/extends'));
var invariant = _interopDefault(require('tiny-invariant'));
var cssBoxModel = require('css-box-model');
var _Object$keys = _interopDefault(require('@babel/runtime/core-js/object/keys'));
var memoizeOne = _interopDefault(require('memoize-one'));
var redux = require('redux');
var _Object$assign = _interopDefault(require('@babel/runtime/core-js/object/assign'));
var rafSchd = _interopDefault(require('raf-schd'));
var _inheritsLoose = _interopDefault(require('@babel/runtime/helpers/inheritsLoose'));
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var reactRedux = require('react-redux');
var reactMotion = require('react-motion');

var vertical = {
  direction: 'vertical',
  line: 'y',
  crossAxisLine: 'x',
  start: 'top',
  end: 'bottom',
  size: 'height',
  crossAxisStart: 'left',
  crossAxisEnd: 'right',
  crossAxisSize: 'width'
};
var horizontal = {
  direction: 'horizontal',
  line: 'x',
  crossAxisLine: 'y',
  start: 'left',
  end: 'right',
  size: 'width',
  crossAxisStart: 'top',
  crossAxisEnd: 'bottom',
  crossAxisSize: 'height'
};

var origin = {
  x: 0,
  y: 0
};
var add = function add(point1, point2) {
  return {
    x: point1.x + point2.x,
    y: point1.y + point2.y
  };
};
var subtract = function subtract(point1, point2) {
  return {
    x: point1.x - point2.x,
    y: point1.y - point2.y
  };
};
var isEqual = function isEqual(point1, point2) {
  return point1.x === point2.x && point1.y === point2.y;
};
var negate = function negate(point) {
  return {
    x: point.x !== 0 ? -point.x : 0,
    y: point.y !== 0 ? -point.y : 0
  };
};
var absolute = function absolute(point) {
  return {
    x: Math.abs(point.x),
    y: Math.abs(point.y)
  };
};
var patch = function patch(line, value, otherValue) {
  var _ref;

  if (otherValue === void 0) {
    otherValue = 0;
  }

  return _ref = {}, _ref[line] = value, _ref[line === 'x' ? 'y' : 'x'] = otherValue, _ref;
};
var distance = function distance(point1, point2) {
  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
};
var closest = function closest(target, points) {
  return Math.min.apply(Math, points.map(function (point) {
    return distance(target, point);
  }));
};
var apply = function apply(fn) {
  return function (point) {
    return {
      x: fn(point.x),
      y: fn(point.y)
    };
  };
};

var offsetByPosition = function offsetByPosition(spacing, point) {
  return {
    top: spacing.top + point.y,
    left: spacing.left + point.x,
    bottom: spacing.bottom + point.y,
    right: spacing.right + point.x
  };
};
var expandByPosition = function expandByPosition(spacing, position) {
  return {
    top: spacing.top - position.y,
    left: spacing.left - position.x,
    right: spacing.right + position.x,
    bottom: spacing.bottom + position.y
  };
};
var getCorners = function getCorners(spacing) {
  return [{
    x: spacing.left,
    y: spacing.top
  }, {
    x: spacing.right,
    y: spacing.top
  }, {
    x: spacing.left,
    y: spacing.bottom
  }, {
    x: spacing.right,
    y: spacing.bottom
  }];
};

var getMaxScroll = (function (_ref) {
  var scrollHeight = _ref.scrollHeight,
      scrollWidth = _ref.scrollWidth,
      height = _ref.height,
      width = _ref.width;
  var maxScroll = subtract({
    x: scrollWidth,
    y: scrollHeight
  }, {
    x: width,
    y: height
  });
  var adjustedMaxScroll = {
    x: Math.max(0, maxScroll.x),
    y: Math.max(0, maxScroll.y)
  };
  return adjustedMaxScroll;
});

var clip = function clip(frame, subject) {
  var result = cssBoxModel.getRect({
    top: Math.max(subject.top, frame.top),
    right: Math.min(subject.right, frame.right),
    bottom: Math.min(subject.bottom, frame.bottom),
    left: Math.max(subject.left, frame.left)
  });

  if (result.width <= 0 || result.height <= 0) {
    return null;
  }

  return result;
};
var getDroppableDimension = function getDroppableDimension(_ref) {
  var descriptor = _ref.descriptor,
      isEnabled = _ref.isEnabled,
      direction = _ref.direction,
      client = _ref.client,
      page = _ref.page,
      closest$$1 = _ref.closest;

  var scrollable = function () {
    if (!closest$$1) {
      return null;
    }

    var maxScroll = getMaxScroll({
      scrollHeight: closest$$1.scrollHeight,
      scrollWidth: closest$$1.scrollWidth,
      height: closest$$1.client.paddingBox.height,
      width: closest$$1.client.paddingBox.width
    });
    return {
      framePageMarginBox: closest$$1.page.marginBox,
      shouldClipSubject: closest$$1.shouldClipSubject,
      scroll: {
        initial: closest$$1.scroll,
        current: closest$$1.scroll,
        max: maxScroll,
        diff: {
          value: origin,
          displacement: origin
        }
      }
    };
  }();

  var subjectPageMarginBox = page.marginBox;
  var clippedPageMarginBox = scrollable && scrollable.shouldClipSubject ? clip(scrollable.framePageMarginBox, subjectPageMarginBox) : subjectPageMarginBox;
  var viewport = {
    closestScrollable: scrollable,
    subjectPageMarginBox: subjectPageMarginBox,
    clippedPageMarginBox: clippedPageMarginBox
  };
  var dimension = {
    descriptor: descriptor,
    axis: direction === 'vertical' ? vertical : horizontal,
    isEnabled: isEnabled,
    client: client,
    page: page,
    viewport: viewport
  };
  return dimension;
};
var scrollDroppable = function scrollDroppable(droppable, newScroll) {
  !droppable.viewport.closestScrollable ? process.env.NODE_ENV !== "production" ? invariant(false) : invariant(false) : void 0;
  var scrollable = droppable.viewport.closestScrollable;
  var framePageMarginBox = scrollable.framePageMarginBox;
  var scrollDiff = subtract(newScroll, scrollable.scroll.initial);
  var scrollDisplacement = negate(scrollDiff);
  var closestScrollable = {
    framePageMarginBox: scrollable.framePageMarginBox,
    shouldClipSubject: scrollable.shouldClipSubject,
    scroll: {
      initial: scrollable.scroll.initial,
      current: newScroll,
      diff: {
        value: scrollDiff,
        displacement: scrollDisplacement
      },
      max: scrollable.scroll.max
    }
  };
  var displacedSubject = offsetByPosition(droppable.viewport.subjectPageMarginBox, scrollDisplacement);
  var clippedPageMarginBox = closestScrollable.shouldClipSubject ? clip(framePageMarginBox, displacedSubject) : cssBoxModel.getRect(displacedSubject);
  var viewport = {
    closestScrollable: closestScrollable,
    subjectPageMarginBox: droppable.viewport.subjectPageMarginBox,
    clippedPageMarginBox: clippedPageMarginBox
  };

  var result = _extends({}, droppable, {
    viewport: viewport
  });

  return result;
};

var toDroppableMap = memoizeOne(function (droppables) {
  return droppables.reduce(function (previous, current) {
    previous[current.descriptor.id] = current;
    return previous;
  }, {});
});
var toDraggableMap = memoizeOne(function (draggables) {
  return draggables.reduce(function (previous, current) {
    previous[current.descriptor.id] = current;
    return previous;
  }, {});
});
var toDroppableList = memoizeOne(function (droppables) {
  return _Object$keys(droppables).map(function (id) {
    return droppables[id];
  });
});
var toDraggableList = memoizeOne(function (draggables) {
  return _Object$keys(draggables).map(function (id) {
    return draggables[id];
  });
});

var getDraggablesInsideDroppable = memoizeOne(function (droppable, draggables) {
  return toDraggableList(draggables).filter(function (draggable) {
    return droppable.descriptor.id === draggable.descriptor.droppableId;
  }).sort(function (a, b) {
    return a.descriptor.index - b.descriptor.index;
  });
});

var isWithin = (function (lowerBound, upperBound) {
  return function (value) {
    return value <= upperBound && value >= lowerBound;
  };
});

var isPositionInFrame = (function (frame) {
  var isWithinVertical = isWithin(frame.top, frame.bottom);
  var isWithinHorizontal = isWithin(frame.left, frame.right);
  return function (point) {
    return isWithinVertical(point.y) && isWithinVertical(point.y) && isWithinHorizontal(point.x) && isWithinHorizontal(point.x);
  };
});

var getRequiredGrowth = memoizeOne(function (draggable, draggables, droppable) {
  var getResult = function getResult(existingSpace) {
    var requiredSpace = draggable.page.marginBox[droppable.axis.size];

    if (requiredSpace <= existingSpace) {
      return null;
    }

    var requiredGrowth = patch(droppable.axis.line, requiredSpace - existingSpace);
    return requiredGrowth;
  };

  var dimensions = getDraggablesInsideDroppable(droppable, draggables);

  if (!dimensions.length) {
    var _existingSpace = droppable.page.marginBox[droppable.axis.size];
    return getResult(_existingSpace);
  }

  var endOfDraggables = dimensions[dimensions.length - 1].page.marginBox[droppable.axis.end];
  var endOfDroppable = droppable.page.marginBox[droppable.axis.end];
  var existingSpace = endOfDroppable - endOfDraggables;
  return getResult(existingSpace);
});
var getWithGrowth = memoizeOne(function (area, growth) {
  return cssBoxModel.getRect(expandByPosition(area, growth));
});

var getClippedRectWithPlaceholder = function getClippedRectWithPlaceholder(_ref) {
  var draggable = _ref.draggable,
      draggables = _ref.draggables,
      droppable = _ref.droppable,
      previousDroppableOverId = _ref.previousDroppableOverId;
  var isHome = draggable.descriptor.droppableId === droppable.descriptor.id;
  var wasOver = Boolean(previousDroppableOverId && previousDroppableOverId === droppable.descriptor.id);
  var clippedPageMarginBox = droppable.viewport.clippedPageMarginBox;

  if (!clippedPageMarginBox) {
    return clippedPageMarginBox;
  }

  if (isHome || !wasOver) {
    return clippedPageMarginBox;
  }

  var requiredGrowth = getRequiredGrowth(draggable, draggables, droppable);

  if (!requiredGrowth) {
    return clippedPageMarginBox;
  }

  var subjectWithGrowth = getWithGrowth(clippedPageMarginBox, requiredGrowth);
  var closestScrollable = droppable.viewport.closestScrollable;

  if (!closestScrollable) {
    return subjectWithGrowth;
  }

  if (!closestScrollable.shouldClipSubject) {
    return subjectWithGrowth;
  }

  return clip(closestScrollable.framePageMarginBox, subjectWithGrowth);
};

var getDroppableOver = (function (_ref2) {
  var target = _ref2.target,
      draggable = _ref2.draggable,
      draggables = _ref2.draggables,
      droppables = _ref2.droppables,
      previousDroppableOverId = _ref2.previousDroppableOverId;
  var maybe = toDroppableList(droppables).filter(function (droppable) {
    return droppable.isEnabled;
  }).filter(function (droppable) {
    var withPlaceholder = getClippedRectWithPlaceholder({
      draggable: draggable,
      draggables: draggables,
      droppable: droppable,
      previousDroppableOverId: previousDroppableOverId
    });

    if (!withPlaceholder) {
      return false;
    }

    return isPositionInFrame(withPlaceholder)(target);
  }).sort(function (a, b) {
    if (a.client.contentBox[a.axis.size] < b.client.contentBox[b.axis.size]) {
      return -1;
    }

    if (a.client.contentBox[a.axis.size] > b.client.contentBox[b.axis.size]) {
      return 1;
    }

    return 0;
  }).find(function (droppable) {
    return !!droppable;
  });
  return maybe ? maybe.descriptor.id : null;
});

var noMovement = {
  displaced: [],
  amount: origin,
  isBeyondStartPosition: false
};
var noImpact = {
  movement: noMovement,
  direction: null,
  destination: null
};

var getDisplacementMap = memoizeOne(function (displaced) {
  return displaced.reduce(function (map, displacement) {
    map[displacement.draggableId] = displacement;
    return map;
  }, {});
});

var isPartiallyVisibleThroughFrame = (function (frame) {
  var isWithinVertical = isWithin(frame.top, frame.bottom);
  var isWithinHorizontal = isWithin(frame.left, frame.right);
  return function (subject) {
    var isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);

    if (isContained) {
      return true;
    }

    var isPartiallyVisibleVertically = isWithinVertical(subject.top) || isWithinVertical(subject.bottom);
    var isPartiallyVisibleHorizontally = isWithinHorizontal(subject.left) || isWithinHorizontal(subject.right);
    var isPartiallyContained = isPartiallyVisibleVertically && isPartiallyVisibleHorizontally;

    if (isPartiallyContained) {
      return true;
    }

    var isBiggerVertically = subject.top < frame.top && subject.bottom > frame.bottom;
    var isBiggerHorizontally = subject.left < frame.left && subject.right > frame.right;
    var isTargetBiggerThanFrame = isBiggerVertically && isBiggerHorizontally;

    if (isTargetBiggerThanFrame) {
      return true;
    }

    var isTargetBiggerOnOneAxis = isBiggerVertically && isPartiallyVisibleHorizontally || isBiggerHorizontally && isPartiallyVisibleVertically;
    return isTargetBiggerOnOneAxis;
  };
});

var isTotallyVisibleThroughFrame = (function (frame) {
  var isWithinVertical = isWithin(frame.top, frame.bottom);
  var isWithinHorizontal = isWithin(frame.left, frame.right);
  return function (subject) {
    var isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
    return isContained;
  };
});

var isVisible = function isVisible(_ref) {
  var target = _ref.target,
      destination = _ref.destination,
      viewport = _ref.viewport,
      isVisibleThroughFrameFn = _ref.isVisibleThroughFrameFn;
  var displacement = destination.viewport.closestScrollable ? destination.viewport.closestScrollable.scroll.diff.displacement : origin;
  var withDisplacement = offsetByPosition(target, displacement);

  if (!destination.viewport.clippedPageMarginBox) {
    return false;
  }

  var isVisibleInDroppable = isVisibleThroughFrameFn(destination.viewport.clippedPageMarginBox)(withDisplacement);
  var isVisibleInViewport = isVisibleThroughFrameFn(viewport)(withDisplacement);
  return isVisibleInDroppable && isVisibleInViewport;
};

var isPartiallyVisible = function isPartiallyVisible(_ref2) {
  var target = _ref2.target,
      destination = _ref2.destination,
      viewport = _ref2.viewport;
  return isVisible({
    target: target,
    destination: destination,
    viewport: viewport,
    isVisibleThroughFrameFn: isPartiallyVisibleThroughFrame
  });
};
var isTotallyVisible = function isTotallyVisible(_ref3) {
  var target = _ref3.target,
      destination = _ref3.destination,
      viewport = _ref3.viewport;
  return isVisible({
    target: target,
    destination: destination,
    viewport: viewport,
    isVisibleThroughFrameFn: isTotallyVisibleThroughFrame
  });
};

var getDisplacement = (function (_ref) {
  var draggable = _ref.draggable,
      destination = _ref.destination,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport;
  var id = draggable.descriptor.id;
  var map = getDisplacementMap(previousImpact.movement.displaced);
  var isVisible = isPartiallyVisible({
    target: draggable.page.marginBox,
    destination: destination,
    viewport: viewport
  });

  var shouldAnimate = function () {
    if (!isVisible) {
      return false;
    }

    var previous = map[id];

    if (!previous) {
      return true;
    }

    return previous.shouldAnimate;
  }();

  var displacement = {
    draggableId: id,
    isVisible: isVisible,
    shouldAnimate: shouldAnimate
  };
  return displacement;
});

var withDroppableScroll = (function (droppable, point) {
  var closestScrollable = droppable.viewport.closestScrollable;

  if (!closestScrollable) {
    return point;
  }

  return add(point, closestScrollable.scroll.diff.value);
});

var inHomeList = (function (_ref) {
  var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
      draggable = _ref.draggable,
      home = _ref.home,
      insideHome = _ref.insideHome,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport;
  var axis = home.axis;
  var originalCenter = draggable.page.borderBox.center;
  var currentCenter = withDroppableScroll(home, pageBorderBoxCenter);
  var isBeyondStartPosition = currentCenter[axis.line] - originalCenter[axis.line] > 0;
  var amount = patch(axis.line, draggable.client.marginBox[axis.size]);
  var displaced = insideHome.filter(function (child) {
    if (child === draggable) {
      return false;
    }

    var borderBox = child.page.borderBox;

    if (isBeyondStartPosition) {
      if (borderBox.center[axis.line] < originalCenter[axis.line]) {
        return false;
      }

      return currentCenter[axis.line] > borderBox[axis.start];
    }

    if (originalCenter[axis.line] < borderBox.center[axis.line]) {
      return false;
    }

    return currentCenter[axis.line] < borderBox[axis.end];
  }).map(function (dimension) {
    return getDisplacement({
      draggable: dimension,
      destination: home,
      previousImpact: previousImpact,
      viewport: viewport.frame
    });
  });
  var ordered = isBeyondStartPosition ? displaced.reverse() : displaced;

  var index = function () {
    var startIndex = draggable.descriptor.index;
    var length = ordered.length;

    if (!length) {
      return startIndex;
    }

    if (isBeyondStartPosition) {
      return startIndex + length;
    }

    return startIndex - length;
  }();

  var movement = {
    amount: amount,
    displaced: ordered,
    isBeyondStartPosition: isBeyondStartPosition
  };
  var impact = {
    movement: movement,
    direction: axis.direction,
    destination: {
      droppableId: home.descriptor.id,
      index: index
    }
  };
  return impact;
});

var inForeignList = (function (_ref) {
  var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
      draggable = _ref.draggable,
      destination = _ref.destination,
      insideDestination = _ref.insideDestination,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport;
  var axis = destination.axis;
  var currentCenter = withDroppableScroll(destination, pageBorderBoxCenter);
  var displaced = insideDestination.filter(function (child) {
    var threshold = child.page.borderBox[axis.end];
    return threshold > currentCenter[axis.line];
  }).map(function (dimension) {
    return getDisplacement({
      draggable: dimension,
      destination: destination,
      previousImpact: previousImpact,
      viewport: viewport.frame
    });
  });
  var newIndex = insideDestination.length - displaced.length;
  var movement = {
    amount: patch(axis.line, draggable.page.marginBox[axis.size]),
    displaced: displaced,
    isBeyondStartPosition: false
  };
  var impact = {
    movement: movement,
    direction: axis.direction,
    destination: {
      droppableId: destination.descriptor.id,
      index: newIndex
    }
  };
  return impact;
});

var getDragImpact = (function (_ref) {
  var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
      draggable = _ref.draggable,
      draggables = _ref.draggables,
      droppables = _ref.droppables,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport;
  var previousDroppableOverId = previousImpact.destination && previousImpact.destination.droppableId;
  var destinationId = getDroppableOver({
    target: pageBorderBoxCenter,
    draggable: draggable,
    draggables: draggables,
    droppables: droppables,
    previousDroppableOverId: previousDroppableOverId
  });

  if (!destinationId) {
    return noImpact;
  }

  var destination = droppables[destinationId];

  if (!destination.isEnabled) {
    return noImpact;
  }

  var home = droppables[draggable.descriptor.droppableId];
  var isWithinHomeDroppable = home.descriptor.id === destinationId;
  var insideDestination = getDraggablesInsideDroppable(destination, draggables);

  if (isWithinHomeDroppable) {
    return inHomeList({
      pageBorderBoxCenter: pageBorderBoxCenter,
      draggable: draggable,
      home: home,
      insideHome: insideDestination,
      previousImpact: previousImpact || noImpact,
      viewport: viewport
    });
  }

  return inForeignList({
    pageBorderBoxCenter: pageBorderBoxCenter,
    draggable: draggable,
    destination: destination,
    insideDestination: insideDestination,
    previousImpact: previousImpact || noImpact,
    viewport: viewport
  });
});

var getHomeLocation = (function (critical) {
  return {
    index: critical.draggable.index,
    droppableId: critical.droppable.id
  };
});

var getSafeClipped = function getSafeClipped(droppable) {
  var rect = droppable.viewport.clippedPageMarginBox;
  !rect ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot get clipped area from droppable') : invariant(false) : void 0;
  return rect;
};

var getBestCrossAxisDroppable = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      pageBorderBoxCenter = _ref.pageBorderBoxCenter,
      source = _ref.source,
      droppables = _ref.droppables,
      viewport = _ref.viewport;
  var sourceClipped = source.viewport.clippedPageMarginBox;

  if (!sourceClipped) {
    return null;
  }

  var axis = source.axis;
  var isBetweenSourceClipped = isWithin(sourceClipped[axis.start], sourceClipped[axis.end]);
  var candidates = toDroppableList(droppables).filter(function (droppable) {
    return droppable !== source;
  }).filter(function (droppable) {
    return droppable.isEnabled;
  }).filter(function (droppable) {
    var clippedPageMarginBox = droppable.viewport.clippedPageMarginBox;

    if (!clippedPageMarginBox) {
      return false;
    }

    return isPartiallyVisibleThroughFrame(viewport.frame)(clippedPageMarginBox);
  }).filter(function (droppable) {
    var targetClipped = getSafeClipped(droppable);

    if (isMovingForward) {
      return sourceClipped[axis.crossAxisEnd] < targetClipped[axis.crossAxisEnd];
    }

    return targetClipped[axis.crossAxisStart] < sourceClipped[axis.crossAxisStart];
  }).filter(function (droppable) {
    var targetClipped = getSafeClipped(droppable);
    var isBetweenDestinationClipped = isWithin(targetClipped[axis.start], targetClipped[axis.end]);
    return isBetweenSourceClipped(targetClipped[axis.start]) || isBetweenSourceClipped(targetClipped[axis.end]) || isBetweenDestinationClipped(sourceClipped[axis.start]) || isBetweenDestinationClipped(sourceClipped[axis.end]);
  }).sort(function (a, b) {
    var first = getSafeClipped(a)[axis.crossAxisStart];
    var second = getSafeClipped(b)[axis.crossAxisStart];

    if (isMovingForward) {
      return first - second;
    }

    return second - first;
  }).filter(function (droppable, index, array) {
    return getSafeClipped(droppable)[axis.crossAxisStart] === getSafeClipped(array[0])[axis.crossAxisStart];
  });

  if (!candidates.length) {
    return null;
  }

  if (candidates.length === 1) {
    return candidates[0];
  }

  var contains = candidates.filter(function (droppable) {
    var isWithinDroppable = isWithin(getSafeClipped(droppable)[axis.start], getSafeClipped(droppable)[axis.end]);
    return isWithinDroppable(pageBorderBoxCenter[axis.line]);
  });

  if (contains.length === 1) {
    return contains[0];
  }

  if (contains.length > 1) {
    return contains.sort(function (a, b) {
      return getSafeClipped(a)[axis.start] - getSafeClipped(b)[axis.start];
    })[0];
  }

  return candidates.sort(function (a, b) {
    var first = closest(pageBorderBoxCenter, getCorners(getSafeClipped(a)));
    var second = closest(pageBorderBoxCenter, getCorners(getSafeClipped(b)));

    if (first !== second) {
      return first - second;
    }

    return getSafeClipped(a)[axis.start] - getSafeClipped(b)[axis.start];
  })[0];
});

var withDroppableDisplacement = (function (droppable, point) {
  var closestScrollable = droppable.viewport.closestScrollable;

  if (!closestScrollable) {
    return point;
  }

  return add(point, closestScrollable.scroll.diff.displacement);
});

var getClosestDraggable = (function (_ref) {
  var axis = _ref.axis,
      viewport = _ref.viewport,
      pageBorderBoxCenter = _ref.pageBorderBoxCenter,
      destination = _ref.destination,
      insideDestination = _ref.insideDestination;

  if (!insideDestination.length) {
    return null;
  }

  var result = insideDestination.filter(function (draggable) {
    return isTotallyVisible({
      target: draggable.page.borderBox,
      destination: destination,
      viewport: viewport.frame
    });
  }).sort(function (a, b) {
    var distanceToA = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, a.page.borderBox.center));
    var distanceToB = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, b.page.borderBox.center));

    if (distanceToA < distanceToB) {
      return -1;
    }

    if (distanceToB < distanceToA) {
      return 1;
    }

    return a.page.borderBox[axis.start] - b.page.borderBox[axis.start];
  });
  return result.length ? result[0] : null;
});

var moveToEdge = (function (_ref) {
  var source = _ref.source,
      sourceEdge = _ref.sourceEdge,
      destination = _ref.destination,
      destinationEdge = _ref.destinationEdge,
      destinationAxis = _ref.destinationAxis;

  var getCorner = function getCorner(area) {
    return patch(destinationAxis.line, area[destinationAxis[destinationEdge]], area[destinationAxis.crossAxisStart]);
  };

  var corner = getCorner(destination);
  var centerDiff = absolute(subtract(source.center, getCorner(source)));
  var signed = patch(destinationAxis.line, (sourceEdge === 'end' ? -1 : 1) * centerDiff[destinationAxis.line], centerDiff[destinationAxis.crossAxisLine]);
  return add(corner, signed);
});

var toHomeList = (function (_ref) {
  var amount = _ref.amount,
      homeIndex = _ref.homeIndex,
      movingRelativeTo = _ref.movingRelativeTo,
      insideDestination = _ref.insideDestination,
      draggable = _ref.draggable,
      destination = _ref.destination,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport;
  var axis = destination.axis;
  var targetIndex = insideDestination.indexOf(movingRelativeTo);
  !(targetIndex !== -1) ? process.env.NODE_ENV !== "production" ? invariant(false, 'Unable to find target in destination droppable') : invariant(false) : void 0;

  if (targetIndex === homeIndex) {
    var _newCenter = draggable.page.borderBox.center;
    var _newImpact = {
      movement: {
        displaced: [],
        amount: amount,
        isBeyondStartPosition: false
      },
      direction: destination.axis.direction,
      destination: {
        droppableId: destination.descriptor.id,
        index: homeIndex
      }
    };
    return {
      pageBorderBoxCenter: withDroppableDisplacement(destination, _newCenter),
      impact: _newImpact
    };
  }

  var isMovingPastOriginalIndex = targetIndex > homeIndex;
  var edge = isMovingPastOriginalIndex ? 'end' : 'start';
  var newCenter = moveToEdge({
    source: draggable.page.borderBox,
    sourceEdge: edge,
    destination: isMovingPastOriginalIndex ? movingRelativeTo.page.borderBox : movingRelativeTo.page.marginBox,
    destinationEdge: edge,
    destinationAxis: axis
  });

  var modified = function () {
    if (!isMovingPastOriginalIndex) {
      return insideDestination.slice(targetIndex, homeIndex);
    }

    var from = homeIndex + 1;
    var to = targetIndex + 1;
    return insideDestination.slice(from, to).reverse();
  }();

  var displaced = modified.map(function (dimension) {
    return getDisplacement({
      draggable: dimension,
      destination: destination,
      previousImpact: previousImpact,
      viewport: viewport.frame
    });
  });
  var newImpact = {
    movement: {
      displaced: displaced,
      amount: amount,
      isBeyondStartPosition: isMovingPastOriginalIndex
    },
    direction: axis.direction,
    destination: {
      droppableId: destination.descriptor.id,
      index: targetIndex
    }
  };
  return {
    pageBorderBoxCenter: withDroppableDisplacement(destination, newCenter),
    impact: newImpact
  };
});

var toForeignList = (function (_ref) {
  var amount = _ref.amount,
      pageBorderBoxCenter = _ref.pageBorderBoxCenter,
      movingRelativeTo = _ref.movingRelativeTo,
      insideDestination = _ref.insideDestination,
      draggable = _ref.draggable,
      destination = _ref.destination,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport;
  var axis = destination.axis;
  var isGoingBeforeTarget = Boolean(movingRelativeTo && pageBorderBoxCenter[destination.axis.line] < movingRelativeTo.page.borderBox.center[destination.axis.line]);

  if (!movingRelativeTo) {
    var _newCenter = moveToEdge({
      source: draggable.page.borderBox,
      sourceEdge: 'start',
      destination: destination.page.contentBox,
      destinationEdge: 'start',
      destinationAxis: axis
    });

    var _newImpact = {
      movement: {
        displaced: [],
        amount: amount,
        isBeyondStartPosition: false
      },
      direction: axis.direction,
      destination: {
        droppableId: destination.descriptor.id,
        index: 0
      }
    };
    return {
      pageBorderBoxCenter: withDroppableDisplacement(destination, _newCenter),
      impact: _newImpact
    };
  }

  var targetIndex = insideDestination.indexOf(movingRelativeTo);
  !(targetIndex !== -1) ? process.env.NODE_ENV !== "production" ? invariant(false, 'The target was not found within its droppable') : invariant(false) : void 0;
  var proposedIndex = isGoingBeforeTarget ? targetIndex : targetIndex + 1;
  var newCenter = moveToEdge({
    source: draggable.page.borderBox,
    sourceEdge: 'start',
    destination: movingRelativeTo.page.marginBox,
    destinationEdge: isGoingBeforeTarget ? 'start' : 'end',
    destinationAxis: axis
  });
  var displaced = insideDestination.slice(proposedIndex, insideDestination.length).map(function (dimension) {
    return getDisplacement({
      draggable: dimension,
      destination: destination,
      viewport: viewport.frame,
      previousImpact: previousImpact
    });
  });
  var newImpact = {
    movement: {
      displaced: displaced,
      amount: amount,
      isBeyondStartPosition: false
    },
    direction: axis.direction,
    destination: {
      droppableId: destination.descriptor.id,
      index: proposedIndex
    }
  };
  return {
    pageBorderBoxCenter: withDroppableDisplacement(destination, newCenter),
    impact: newImpact
  };
});

var moveToNewDroppable = (function (_ref) {
  var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
      destination = _ref.destination,
      insideDestination = _ref.insideDestination,
      draggable = _ref.draggable,
      movingRelativeTo = _ref.movingRelativeTo,
      home = _ref.home,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport;
  var amount = patch(destination.axis.line, draggable.client.marginBox[destination.axis.size]);

  if (destination.descriptor.id === draggable.descriptor.droppableId) {
    !movingRelativeTo ? process.env.NODE_ENV !== "production" ? invariant(false, 'There will always be a target in the original list') : invariant(false) : void 0;
    return toHomeList({
      amount: amount,
      homeIndex: home.index,
      movingRelativeTo: movingRelativeTo,
      insideDestination: insideDestination,
      draggable: draggable,
      destination: destination,
      previousImpact: previousImpact,
      viewport: viewport
    });
  }

  return toForeignList({
    amount: amount,
    pageBorderBoxCenter: pageBorderBoxCenter,
    movingRelativeTo: movingRelativeTo,
    insideDestination: insideDestination,
    draggable: draggable,
    destination: destination,
    previousImpact: previousImpact,
    viewport: viewport
  });
});

var moveCrossAxis = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      pageBorderBoxCenter = _ref.pageBorderBoxCenter,
      draggableId = _ref.draggableId,
      droppableId = _ref.droppableId,
      home = _ref.home,
      draggables = _ref.draggables,
      droppables = _ref.droppables,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport;
  var draggable = draggables[draggableId];
  var source = droppables[droppableId];
  var destination = getBestCrossAxisDroppable({
    isMovingForward: isMovingForward,
    pageBorderBoxCenter: pageBorderBoxCenter,
    source: source,
    droppables: droppables,
    viewport: viewport
  });

  if (!destination) {
    return null;
  }

  var insideDestination = getDraggablesInsideDroppable(destination, draggables);
  var movingRelativeTo = getClosestDraggable({
    axis: destination.axis,
    pageBorderBoxCenter: pageBorderBoxCenter,
    destination: destination,
    insideDestination: insideDestination,
    viewport: viewport
  });

  if (insideDestination.length && !movingRelativeTo) {
    return null;
  }

  return moveToNewDroppable({
    pageBorderBoxCenter: pageBorderBoxCenter,
    destination: destination,
    draggable: draggable,
    movingRelativeTo: movingRelativeTo,
    insideDestination: insideDestination,
    home: home,
    previousImpact: previousImpact || noImpact,
    viewport: viewport
  });
});

var isTotallyVisibleInNewLocation = (function (_ref) {
  var draggable = _ref.draggable,
      destination = _ref.destination,
      newPageBorderBoxCenter = _ref.newPageBorderBoxCenter,
      viewport = _ref.viewport;
  var diff = subtract(newPageBorderBoxCenter, draggable.page.borderBox.center);
  var shifted = offsetByPosition(draggable.page.borderBox, diff);
  return isTotallyVisible({
    target: shifted,
    destination: destination,
    viewport: viewport
  });
});

var withFirstAdded = function withFirstAdded(_ref) {
  var add = _ref.add,
      previousImpact = _ref.previousImpact,
      droppable = _ref.droppable,
      draggables = _ref.draggables,
      viewport = _ref.viewport;
  var newDisplacement = {
    draggableId: add,
    isVisible: true,
    shouldAnimate: true
  };
  var added = [newDisplacement].concat(previousImpact.movement.displaced);
  var withUpdatedVisibility = added.map(function (current) {
    if (current === newDisplacement) {
      return current;
    }

    var updated = getDisplacement({
      draggable: draggables[current.draggableId],
      destination: droppable,
      previousImpact: previousImpact,
      viewport: viewport.frame
    });
    return updated;
  });
  return withUpdatedVisibility;
};

var forceVisibleDisplacement = function forceVisibleDisplacement(current) {
  if (current.isVisible) {
    return current;
  }

  return {
    draggableId: current.draggableId,
    isVisible: true,
    shouldAnimate: false
  };
};

var withFirstRemoved = function withFirstRemoved(_ref2) {
  var dragging = _ref2.dragging,
      isVisibleInNewLocation = _ref2.isVisibleInNewLocation,
      previousImpact = _ref2.previousImpact,
      droppable = _ref2.droppable,
      draggables = _ref2.draggables;
  var last = previousImpact.movement.displaced;
  !last.length ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot remove displacement from empty list') : invariant(false) : void 0;
  var withFirstRestored = last.slice(1, last.length);

  if (!withFirstRestored.length) {
    return withFirstRestored;
  }

  if (isVisibleInNewLocation) {
    return withFirstRestored;
  }

  var axis = droppable.axis;
  var sizeOfRestored = draggables[last[0].draggableId].page.marginBox[axis.size];
  var sizeOfDragging = draggables[dragging].page.marginBox[axis.size];
  var buffer = sizeOfRestored + sizeOfDragging;
  var withUpdatedVisibility = withFirstRestored.map(function (displacement, index) {
    if (index === 0) {
      return forceVisibleDisplacement(displacement);
    }

    if (buffer > 0) {
      var current = draggables[displacement.draggableId];
      var size = current.page.marginBox[axis.size];
      buffer -= size;
      return forceVisibleDisplacement(displacement);
    }

    return {
      draggableId: displacement.draggableId,
      isVisible: false,
      shouldAnimate: false
    };
  });
  return withUpdatedVisibility;
};

var inHomeList$1 = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      draggableId = _ref.draggableId,
      previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter,
      previousImpact = _ref.previousImpact,
      droppable = _ref.droppable,
      draggables = _ref.draggables,
      viewport = _ref.viewport;
  var location = previousImpact.destination;
  !location ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot move to next index in home list when there is no previous destination') : invariant(false) : void 0;
  var draggable = draggables[draggableId];
  var axis = droppable.axis;
  var insideDroppable = getDraggablesInsideDroppable(droppable, draggables);
  var startIndex = draggable.descriptor.index;
  var currentIndex = location.index;
  var proposedIndex = isMovingForward ? currentIndex + 1 : currentIndex - 1;

  if (proposedIndex > insideDroppable.length - 1) {
    return null;
  }

  if (proposedIndex < 0) {
    return null;
  }

  var destination = insideDroppable[proposedIndex];
  var isMovingTowardStart = isMovingForward && proposedIndex <= startIndex || !isMovingForward && proposedIndex >= startIndex;

  var edge = function () {
    if (!isMovingTowardStart) {
      return isMovingForward ? 'end' : 'start';
    }

    return isMovingForward ? 'start' : 'end';
  }();

  var newPageBorderBoxCenter = moveToEdge({
    source: draggable.page.borderBox,
    sourceEdge: edge,
    destination: destination.page.borderBox,
    destinationEdge: edge,
    destinationAxis: droppable.axis
  });
  var isVisibleInNewLocation = isTotallyVisibleInNewLocation({
    draggable: draggable,
    destination: droppable,
    newPageBorderBoxCenter: newPageBorderBoxCenter,
    viewport: viewport.frame
  });
  var displaced = isMovingTowardStart ? withFirstRemoved({
    dragging: draggableId,
    isVisibleInNewLocation: isVisibleInNewLocation,
    previousImpact: previousImpact,
    droppable: droppable,
    draggables: draggables
  }) : withFirstAdded({
    add: destination.descriptor.id,
    previousImpact: previousImpact,
    droppable: droppable,
    draggables: draggables,
    viewport: viewport
  });
  var newImpact = {
    movement: {
      displaced: displaced,
      amount: patch(axis.line, draggable.page.marginBox[axis.size]),
      isBeyondStartPosition: proposedIndex > startIndex
    },
    destination: {
      droppableId: droppable.descriptor.id,
      index: proposedIndex
    },
    direction: droppable.axis.direction
  };

  if (isVisibleInNewLocation) {
    return {
      pageBorderBoxCenter: withDroppableDisplacement(droppable, newPageBorderBoxCenter),
      impact: newImpact,
      scrollJumpRequest: null
    };
  }

  var distance$$1 = subtract(newPageBorderBoxCenter, previousPageBorderBoxCenter);
  var distanceWithScroll = withDroppableDisplacement(droppable, distance$$1);
  return {
    pageBorderBoxCenter: previousPageBorderBoxCenter,
    impact: newImpact,
    scrollJumpRequest: distanceWithScroll
  };
});

var inForeignList$1 = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      draggableId = _ref.draggableId,
      previousImpact = _ref.previousImpact,
      previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter,
      droppable = _ref.droppable,
      draggables = _ref.draggables,
      viewport = _ref.viewport;
  !previousImpact.destination ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot move to next index where there is no previous destination') : invariant(false) : void 0;
  var location = previousImpact.destination;
  var draggable = draggables[draggableId];
  var axis = droppable.axis;
  var insideForeignDroppable = getDraggablesInsideDroppable(droppable, draggables);
  var currentIndex = location.index;
  var proposedIndex = isMovingForward ? currentIndex + 1 : currentIndex - 1;
  var lastIndex = insideForeignDroppable.length - 1;

  if (proposedIndex > insideForeignDroppable.length) {
    return null;
  }

  if (proposedIndex < 0) {
    return null;
  }

  var movingRelativeTo = insideForeignDroppable[Math.min(proposedIndex, lastIndex)];
  var isMovingPastLastIndex = proposedIndex > lastIndex;
  var sourceEdge = 'start';

  var destinationEdge = function () {
    if (isMovingPastLastIndex) {
      return 'end';
    }

    return 'start';
  }();

  var newPageBorderBoxCenter = moveToEdge({
    source: draggable.page.borderBox,
    sourceEdge: sourceEdge,
    destination: movingRelativeTo.page.marginBox,
    destinationEdge: destinationEdge,
    destinationAxis: droppable.axis
  });
  var isVisibleInNewLocation = isTotallyVisibleInNewLocation({
    draggable: draggable,
    destination: droppable,
    newPageBorderBoxCenter: newPageBorderBoxCenter,
    viewport: viewport.frame
  });

  var displaced = function () {
    if (isMovingForward) {
      return withFirstRemoved({
        dragging: draggableId,
        isVisibleInNewLocation: isVisibleInNewLocation,
        previousImpact: previousImpact,
        droppable: droppable,
        draggables: draggables
      });
    }

    return withFirstAdded({
      add: movingRelativeTo.descriptor.id,
      previousImpact: previousImpact,
      droppable: droppable,
      draggables: draggables,
      viewport: viewport
    });
  }();

  var newImpact = {
    movement: {
      displaced: displaced,
      amount: patch(axis.line, draggable.page.marginBox[axis.size]),
      isBeyondStartPosition: false
    },
    destination: {
      droppableId: droppable.descriptor.id,
      index: proposedIndex
    },
    direction: droppable.axis.direction
  };

  if (isVisibleInNewLocation) {
    return {
      pageBorderBoxCenter: withDroppableDisplacement(droppable, newPageBorderBoxCenter),
      impact: newImpact,
      scrollJumpRequest: null
    };
  }

  var distanceMoving = subtract(newPageBorderBoxCenter, previousPageBorderBoxCenter);
  var distanceWithScroll = withDroppableDisplacement(droppable, distanceMoving);
  return {
    pageBorderBoxCenter: previousPageBorderBoxCenter,
    impact: newImpact,
    scrollJumpRequest: distanceWithScroll
  };
});

var moveToNextIndex = (function (args) {
  var draggableId = args.draggableId,
      draggables = args.draggables,
      droppable = args.droppable;
  var draggable = draggables[draggableId];
  var isInHomeList = draggable.descriptor.droppableId === droppable.descriptor.id;

  if (!droppable.isEnabled) {
    return null;
  }

  if (isInHomeList) {
    return inHomeList$1(args);
  }

  return inForeignList$1(args);
});

var getClientSelection = function getClientSelection(pageBorderBoxCenter, currentScroll) {
  return subtract(pageBorderBoxCenter, currentScroll);
};

var moveInDirection = (function (_ref) {
  var state = _ref.state,
      type = _ref.type;

  var _ref2 = function () {
    if (state.impact.destination) {
      return {
        droppable: state.dimensions.droppables[state.impact.destination.droppableId],
        isMainAxisMovementAllowed: true
      };
    }

    return {
      droppable: state.dimensions.droppables[state.critical.droppable.id],
      isMainAxisMovementAllowed: false
    };
  }(),
      droppable = _ref2.droppable,
      isMainAxisMovementAllowed = _ref2.isMainAxisMovementAllowed;

  var direction = droppable.axis.direction;
  var isMovingOnMainAxis = direction === 'vertical' && (type === 'MOVE_UP' || type === 'MOVE_DOWN') || direction === 'horizontal' && (type === 'MOVE_LEFT' || type === 'MOVE_RIGHT');

  if (isMovingOnMainAxis && !isMainAxisMovementAllowed) {
    return null;
  }

  var isMovingForward = type === 'MOVE_DOWN' || type === 'MOVE_RIGHT';

  if (isMovingOnMainAxis) {
    var _result = moveToNextIndex({
      isMovingForward: isMovingForward,
      draggableId: state.critical.draggable.id,
      droppable: droppable,
      draggables: state.dimensions.draggables,
      previousPageBorderBoxCenter: state.current.page.borderBoxCenter,
      previousImpact: state.impact,
      viewport: state.viewport
    });

    if (!_result) {
      return null;
    }

    return {
      impact: _result.impact,
      clientSelection: getClientSelection(_result.pageBorderBoxCenter, state.viewport.scroll.current),
      scrollJumpRequest: _result.scrollJumpRequest
    };
  }

  var home = getHomeLocation(state.critical);
  var result = moveCrossAxis({
    isMovingForward: isMovingForward,
    pageBorderBoxCenter: state.current.page.borderBoxCenter,
    draggableId: state.critical.draggable.id,
    droppableId: droppable.descriptor.id,
    home: home,
    draggables: state.dimensions.draggables,
    droppables: state.dimensions.droppables,
    previousImpact: state.impact,
    viewport: state.viewport
  });

  if (!result) {
    return null;
  }

  return {
    clientSelection: getClientSelection(result.pageBorderBoxCenter, state.viewport.scroll.current),
    impact: result.impact,
    scrollJumpRequest: null
  };
});

var scrollViewport = (function (viewport, newScroll) {
  var diff = subtract(newScroll, viewport.scroll.initial);
  var displacement = negate(diff);
  var frame = cssBoxModel.getRect({
    top: newScroll.y,
    bottom: newScroll.y + viewport.frame.height,
    left: newScroll.x,
    right: newScroll.x + viewport.frame.width
  });
  var updated = {
    frame: frame,
    scroll: {
      initial: viewport.scroll.initial,
      max: viewport.scroll.max,
      current: newScroll,
      diff: {
        value: diff,
        displacement: displacement
      }
    }
  };
  return updated;
});

var getHomeImpact = (function (critical, dimensions) {
  var home = dimensions.droppables[critical.droppable.id];
  var axis = home.axis;
  var draggable = dimensions.draggables[critical.draggable.id];
  return {
    movement: {
      displaced: [],
      isBeyondStartPosition: false,
      amount: patch(axis.line, draggable.client.marginBox[axis.size])
    },
    direction: axis.direction,
    destination: getHomeLocation(critical)
  };
});

var getPageItemPositions = (function (client, windowScroll) {
  return {
    selection: add(client.selection, windowScroll),
    borderBoxCenter: add(client.borderBoxCenter, windowScroll),
    offset: add(client.offset, windowScroll)
  };
});

function isMovementAllowed(state) {
  return state.phase === 'DRAGGING' || state.phase === 'COLLECTING';
}

var idle = {
  phase: 'IDLE'
};
var preparing = {
  phase: 'PREPARING'
};

var moveWithPositionUpdates = function moveWithPositionUpdates(_ref) {
  var state = _ref.state,
      clientSelection = _ref.clientSelection,
      shouldAnimate = _ref.shouldAnimate,
      viewport = _ref.viewport,
      impact = _ref.impact,
      scrollJumpRequest = _ref.scrollJumpRequest;
  var newViewport = viewport || state.viewport;
  var currentWindowScroll = newViewport.scroll.current;

  var client = function () {
    var offset = subtract(clientSelection, state.initial.client.selection);
    return {
      offset: offset,
      selection: clientSelection,
      borderBoxCenter: add(state.initial.client.borderBoxCenter, offset)
    };
  }();

  var page = getPageItemPositions(client, currentWindowScroll);
  var current = {
    client: client,
    page: page
  };

  if (state.phase === 'COLLECTING') {
    return _extends({
      phase: 'COLLECTING'
    }, state, {
      current: current
    });
  }

  var newImpact = impact || getDragImpact({
    pageBorderBoxCenter: page.borderBoxCenter,
    draggable: state.dimensions.draggables[state.critical.draggable.id],
    draggables: state.dimensions.draggables,
    droppables: state.dimensions.droppables,
    previousImpact: state.impact,
    viewport: newViewport
  });

  var result = _extends({}, state, {
    current: current,
    shouldAnimate: shouldAnimate,
    impact: newImpact,
    scrollJumpRequest: scrollJumpRequest || null,
    viewport: newViewport
  });

  return result;
};

var reducer = (function (state, action) {
  if (state === void 0) {
    state = idle;
  }

  if (action.type === 'CLEAN') {
    return idle;
  }

  if (action.type === 'PREPARE') {
    return preparing;
  }

  if (action.type === 'INITIAL_PUBLISH') {
    !(state.phase === 'PREPARING') ? process.env.NODE_ENV !== "production" ? invariant(false, 'INITIAL_PUBLISH must come after a PREPARING phase') : invariant(false) : void 0;
    var _action$payload = action.payload,
        critical = _action$payload.critical,
        client = _action$payload.client,
        viewport = _action$payload.viewport,
        dimensions = _action$payload.dimensions,
        autoScrollMode = _action$payload.autoScrollMode;
    var initial = {
      client: client,
      page: {
        selection: add(client.selection, viewport.scroll.initial),
        borderBoxCenter: add(client.selection, viewport.scroll.initial),
        offset: origin
      }
    };
    var result = {
      phase: 'DRAGGING',
      isDragging: true,
      critical: critical,
      autoScrollMode: autoScrollMode,
      dimensions: dimensions,
      initial: initial,
      current: initial,
      impact: getHomeImpact(critical, dimensions),
      viewport: viewport,
      scrollJumpRequest: null,
      shouldAnimate: false
    };
    return result;
  }

  if (action.type === 'COLLECTION_STARTING') {
    if (state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') {
      return state;
    }

    !(state.phase === 'DRAGGING') ? process.env.NODE_ENV !== "production" ? invariant(false, "Collection cannot start from phase " + state.phase) : invariant(false) : void 0;

    var _result = _extends({
      phase: 'COLLECTING'
    }, state, {
      phase: 'COLLECTING'
    });

    return _result;
  }

  if (action.type === 'PUBLISH') {
    !(state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') ? process.env.NODE_ENV !== "production" ? invariant(false, "Unexpected " + action.type + " received in phase " + state.phase) : invariant(false) : void 0;
    process.env.NODE_ENV !== "production" ? invariant(false, "Dynamic additions and removals of Draggable and Droppable components\n      is currently not supported. But will be soon!") : invariant(false);
  }

  if (action.type === 'MOVE') {
    if (state.phase === 'PREPARING') {
      return state;
    }

    if (state.phase === 'DROP_PENDING') {
      return state;
    }

    !isMovementAllowed(state) ? process.env.NODE_ENV !== "production" ? invariant(false, action.type + " not permitted in phase " + state.phase) : invariant(false) : void 0;
    var _action$payload2 = action.payload,
        _client = _action$payload2.client,
        shouldAnimate = _action$payload2.shouldAnimate;

    if (state.shouldAnimate === shouldAnimate && isEqual(_client, state.current.client.selection)) {
      return state;
    }

    var impact = state.autoScrollMode === 'JUMP' ? state.impact : null;
    return moveWithPositionUpdates({
      state: state,
      clientSelection: _client,
      impact: impact,
      shouldAnimate: shouldAnimate
    });
  }

  if (action.type === 'UPDATE_DROPPABLE_SCROLL') {
    var _extends2;

    if (state.phase === 'PREPARING') {
      return state;
    }

    if (state.phase === 'DROP_PENDING') {
      return state;
    }

    !isMovementAllowed(state) ? process.env.NODE_ENV !== "production" ? invariant(false, action.type + " not permitted in phase " + state.phase) : invariant(false) : void 0;
    var _action$payload3 = action.payload,
        id = _action$payload3.id,
        offset = _action$payload3.offset;
    var target = state.dimensions.droppables[id];

    if (!target) {
      return state;
    }

    var updated = scrollDroppable(target, offset);

    var _dimensions = _extends({}, state.dimensions, {
      droppables: _extends({}, state.dimensions.droppables, (_extends2 = {}, _extends2[id] = updated, _extends2))
    });

    var _impact = function () {
      !isMovementAllowed(state) ? process.env.NODE_ENV !== "production" ? invariant(false) : invariant(false) : void 0;

      if (state.autoScrollMode === 'JUMP') {
        return state.impact;
      }

      return getDragImpact({
        pageBorderBoxCenter: state.current.page.borderBoxCenter,
        draggable: _dimensions.draggables[state.critical.draggable.id],
        draggables: _dimensions.draggables,
        droppables: _dimensions.droppables,
        previousImpact: state.impact,
        viewport: state.viewport
      });
    }();

    return _extends({
      phase: 'DRAGGING'
    }, state, {
      phase: state.phase,
      impact: _impact,
      dimensions: _dimensions,
      scrollJumpRequest: null
    });
  }

  if (action.type === 'UPDATE_DROPPABLE_IS_ENABLED') {
    var _extends3;

    if (state.phase === 'DROP_PENDING') {
      return state;
    }

    !isMovementAllowed(state) ? process.env.NODE_ENV !== "production" ? invariant(false, "Attempting to move in an unsupported phase " + state.phase) : invariant(false) : void 0;
    var _action$payload4 = action.payload,
        _id = _action$payload4.id,
        isEnabled = _action$payload4.isEnabled;
    var _target = state.dimensions.droppables[_id];

    if (!_target) {
      return state;
    }

    !(_target.isEnabled !== isEnabled) ? process.env.NODE_ENV !== "production" ? invariant(false, "Trying to set droppable isEnabled to " + String(isEnabled) + "\n      but it is already " + String(_target.isEnabled)) : invariant(false) : void 0;

    var _updated = _extends({}, _target, {
      isEnabled: isEnabled
    });

    var _dimensions2 = _extends({}, state.dimensions, {
      droppables: _extends({}, state.dimensions.droppables, (_extends3 = {}, _extends3[_id] = _updated, _extends3))
    });

    var _impact2 = getDragImpact({
      pageBorderBoxCenter: state.current.page.borderBoxCenter,
      draggable: _dimensions2.draggables[state.critical.draggable.id],
      draggables: _dimensions2.draggables,
      droppables: _dimensions2.droppables,
      previousImpact: state.impact,
      viewport: state.viewport
    });

    return _extends({
      phase: 'DRAGGING'
    }, state, {
      phase: state.phase,
      impact: _impact2,
      dimensions: _dimensions2
    });
  }

  if (action.type === 'MOVE_BY_WINDOW_SCROLL') {
    if (state.phase === 'PREPARING') {
      return state;
    }

    if (state.phase === 'DROP_PENDING' || state.phase === 'DROP_ANIMATING') {
      return state;
    }

    !isMovementAllowed(state) ? process.env.NODE_ENV !== "production" ? invariant(false, "Cannot move by window in phase " + state.phase) : invariant(false) : void 0;
    var newScroll = action.payload.scroll;

    if (isEqual(state.viewport.scroll.current, newScroll)) {
      return state;
    }

    var isJumpScrolling = state.autoScrollMode === 'JUMP';

    var _impact3 = isJumpScrolling ? state.impact : null;

    var _viewport = scrollViewport(state.viewport, newScroll);

    return moveWithPositionUpdates({
      state: state,
      clientSelection: state.current.client.selection,
      viewport: _viewport,
      shouldAnimate: false,
      impact: _impact3
    });
  }

  if (action.type === 'UPDATE_VIEWPORT_MAX_SCROLL') {
    !state.isDragging ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot update the max viewport scroll if not dragging') : invariant(false) : void 0;
    var existing = state.viewport;

    var _viewport2 = _extends({}, existing, {
      scroll: _extends({}, existing.scroll, {
        max: action.payload
      })
    });

    return _extends({
      phase: 'DRAGGING'
    }, state, {
      phase: state.phase,
      viewport: _viewport2
    });
  }

  if (action.type === 'MOVE_UP' || action.type === 'MOVE_DOWN' || action.type === 'MOVE_LEFT' || action.type === 'MOVE_RIGHT') {
    if (state.phase === 'PREPARING') {
      return state;
    }

    if (state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') {
      return state;
    }

    !(state.phase === 'DRAGGING') ? process.env.NODE_ENV !== "production" ? invariant(false, action.type + " received while not in DRAGGING phase") : invariant(false) : void 0;

    var _result2 = moveInDirection({
      state: state,
      type: action.type
    });

    if (!_result2) {
      return state;
    }

    return moveWithPositionUpdates({
      state: state,
      impact: _result2.impact,
      clientSelection: _result2.clientSelection,
      shouldAnimate: true,
      scrollJumpRequest: _result2.scrollJumpRequest
    });
  }

  if (action.type === 'DROP_PENDING') {
    var reason = action.payload.reason;
    !(state.phase === 'COLLECTING') ? process.env.NODE_ENV !== "production" ? invariant(false, 'Can only move into the DROP_PENDING phase from the COLLECTING phase') : invariant(false) : void 0;

    var newState = _extends({
      phase: 'DROP_PENDING'
    }, state, {
      phase: 'DROP_PENDING',
      isWaiting: true,
      reason: reason
    });

    return newState;
  }

  if (action.type === 'DROP_ANIMATE') {
    var pending = action.payload;
    !(state.phase === 'DRAGGING' || state.phase === 'DROP_PENDING') ? process.env.NODE_ENV !== "production" ? invariant(false, "Cannot animate drop from phase " + state.phase) : invariant(false) : void 0;
    var _result3 = {
      phase: 'DROP_ANIMATING',
      pending: pending,
      dimensions: state.dimensions
    };
    return _result3;
  }

  if (action.type === 'DROP_COMPLETE') {
    return idle;
  }

  return state;
});

var lift = function lift(args) {
  return {
    type: 'LIFT',
    payload: args
  };
};
var initialPublish = function initialPublish(args) {
  return {
    type: 'INITIAL_PUBLISH',
    payload: args
  };
};
var publish = function publish(args) {
  return {
    type: 'PUBLISH',
    payload: args
  };
};
var collectionStarting = function collectionStarting() {
  return {
    type: 'COLLECTION_STARTING',
    payload: null
  };
};
var updateDroppableScroll = function updateDroppableScroll(args) {
  return {
    type: 'UPDATE_DROPPABLE_SCROLL',
    payload: args
  };
};
var updateDroppableIsEnabled = function updateDroppableIsEnabled(args) {
  return {
    type: 'UPDATE_DROPPABLE_IS_ENABLED',
    payload: args
  };
};
var move = function move(args) {
  return {
    type: 'MOVE',
    payload: args
  };
};
var moveByWindowScroll = function moveByWindowScroll(args) {
  return {
    type: 'MOVE_BY_WINDOW_SCROLL',
    payload: args
  };
};
var updateViewportMaxScroll = function updateViewportMaxScroll(max) {
  return {
    type: 'UPDATE_VIEWPORT_MAX_SCROLL',
    payload: max
  };
};
var moveUp = function moveUp() {
  return {
    type: 'MOVE_UP',
    payload: null
  };
};
var moveDown = function moveDown() {
  return {
    type: 'MOVE_DOWN',
    payload: null
  };
};
var moveRight = function moveRight() {
  return {
    type: 'MOVE_RIGHT',
    payload: null
  };
};
var moveLeft = function moveLeft() {
  return {
    type: 'MOVE_LEFT',
    payload: null
  };
};
var clean = function clean() {
  return {
    type: 'CLEAN',
    payload: null
  };
};
var prepare = function prepare() {
  return {
    type: 'PREPARE',
    payload: null
  };
};
var animateDrop = function animateDrop(pending) {
  return {
    type: 'DROP_ANIMATE',
    payload: pending
  };
};
var completeDrop = function completeDrop(result) {
  return {
    type: 'DROP_COMPLETE',
    payload: result
  };
};
var drop = function drop(args) {
  return {
    type: 'DROP',
    payload: args
  };
};
var dropPending = function dropPending(args) {
  return {
    type: 'DROP_PENDING',
    payload: args
  };
};
var dropAnimationFinished = function dropAnimationFinished() {
  return {
    type: 'DROP_ANIMATION_FINISHED',
    payload: null
  };
};

var lift$1 = (function (getMarshal) {
  var timeoutId = null;

  var tryAbortCriticalCollection = function tryAbortCriticalCollection() {
    if (timeoutId == null) {
      return;
    }

    clearTimeout(timeoutId);
    timeoutId = null;
  };

  return function (_ref) {
    var getState = _ref.getState,
        dispatch = _ref.dispatch;
    return function (next) {
      return function (action) {
        if (action.type === 'CLEAN') {
          tryAbortCriticalCollection();
          next(action);
          return;
        }

        if (action.type !== 'LIFT') {
          next(action);
          return;
        }

        !!timeoutId ? process.env.NODE_ENV !== "production" ? invariant(false, 'There should not be a pending complete lift phase when a lift action is fired') : invariant(false) : void 0;
        var marshal = getMarshal();
        var _action$payload = action.payload,
            id = _action$payload.id,
            client = _action$payload.client,
            autoScrollMode = _action$payload.autoScrollMode,
            viewport = _action$payload.viewport;
        var initial = getState();

        if (initial.phase === 'DROP_ANIMATING') {
          dispatch(completeDrop(initial.pending.result));
        }

        var postFlushState = getState();
        !(postFlushState.phase === 'IDLE') ? process.env.NODE_ENV !== "production" ? invariant(false, 'Incorrect phase to start a drag') : invariant(false) : void 0;
        dispatch(prepare());
        timeoutId = setTimeout(function () {
          timeoutId = null;
          var state = getState();
          !(state.phase === 'PREPARING') ? process.env.NODE_ENV !== "production" ? invariant(false, 'Invalid phase for completing lift') : invariant(false) : void 0;
          var scrollOptions = {
            shouldPublishImmediately: autoScrollMode === 'JUMP'
          };
          var request = {
            draggableId: id,
            scrollOptions: scrollOptions
          };

          var _marshal$startPublish = marshal.startPublishing(request, viewport.scroll.current),
              critical = _marshal$startPublish.critical,
              dimensions = _marshal$startPublish.dimensions;

          dispatch(initialPublish({
            critical: critical,
            dimensions: dimensions,
            client: client,
            autoScrollMode: autoScrollMode,
            viewport: viewport
          }));
        });
      };
    };
  };
});

var style = (function (marshal) {
  return function () {
    return function (next) {
      return function (action) {
        if (action.type === 'INITIAL_PUBLISH' || action.type === 'PUBLISH') {
          marshal.dragging();
        }

        if (action.type === 'COLLECTION_STARTING') {
          marshal.collecting();
        }

        if (action.type === 'DROP_ANIMATE') {
          marshal.dropping(action.payload.result.reason);
        }

        if (action.type === 'CLEAN' || action.type === 'DROP_COMPLETE') {
          marshal.resting();
        }

        next(action);
      };
    };
  };
});

var getNewHomeClientBorderBoxCenter = (function (_ref) {
  var movement = _ref.movement,
      draggable = _ref.draggable,
      draggables = _ref.draggables,
      destination = _ref.destination;
  var originalCenter = draggable.client.borderBox.center;

  if (destination == null) {
    return originalCenter;
  }

  var displaced = movement.displaced,
      isBeyondStartPosition = movement.isBeyondStartPosition;
  var axis = destination.axis;
  var isWithinHomeDroppable = destination.descriptor.id === draggable.descriptor.droppableId;

  if (isWithinHomeDroppable && !displaced.length) {
    return originalCenter;
  }

  var draggablesInDestination = getDraggablesInsideDroppable(destination, draggables);

  var movingRelativeTo = function () {
    if (isWithinHomeDroppable) {
      return draggables[displaced[0].draggableId].client.borderBox;
    }

    if (displaced.length) {
      return draggables[displaced[0].draggableId].client.borderBox;
    }

    if (draggablesInDestination.length) {
      return draggablesInDestination[draggablesInDestination.length - 1].client.marginBox;
    }

    return destination.client.contentBox;
  }();

  var _ref2 = function () {
    if (isWithinHomeDroppable) {
      if (isBeyondStartPosition) {
        return {
          sourceEdge: 'end',
          destinationEdge: 'end'
        };
      }

      return {
        sourceEdge: 'start',
        destinationEdge: 'start'
      };
    }

    if (!displaced.length && draggablesInDestination.length) {
      return {
        sourceEdge: 'start',
        destinationEdge: 'end'
      };
    }

    return {
      sourceEdge: 'start',
      destinationEdge: 'start'
    };
  }(),
      sourceEdge = _ref2.sourceEdge,
      destinationEdge = _ref2.destinationEdge;

  var source = draggable.client.borderBox;
  var targetCenter = moveToEdge({
    source: source,
    sourceEdge: sourceEdge,
    destination: movingRelativeTo,
    destinationEdge: destinationEdge,
    destinationAxis: axis
  });
  return targetCenter;
});

var getScrollDisplacement = function getScrollDisplacement(droppable, viewport) {
  return withDroppableDisplacement(droppable, viewport.scroll.diff.displacement);
};

var drop$1 = (function (_ref) {
  var getState = _ref.getState,
      dispatch = _ref.dispatch;
  return function (next) {
    return function (action) {
      if (action.type !== 'DROP') {
        next(action);
        return;
      }

      var state = getState();
      var reason = action.payload.reason;

      if (state.phase === 'COLLECTING') {
        dispatch(dropPending({
          reason: reason
        }));
        return;
      }

      if (state.phase === 'PREPARING') {
        dispatch(clean());
        return;
      }

      if (state.phase === 'IDLE') {
        return;
      }

      var isWaitingForDrop = state.phase === 'DROP_PENDING' && state.isWaiting;
      !!isWaitingForDrop ? process.env.NODE_ENV !== "production" ? invariant(false, 'A DROP action occurred while DROP_PENDING and still waiting') : invariant(false) : void 0;
      !(state.phase === 'DRAGGING' || state.phase === 'DROP_PENDING') ? process.env.NODE_ENV !== "production" ? invariant(false, "Cannot drop in phase: " + state.phase) : invariant(false) : void 0;
      var critical = state.critical;
      var dimensions = state.dimensions;
      var impact = reason === 'DROP' ? state.impact : noImpact;
      var home = dimensions.droppables[state.critical.droppable.id];
      var draggable = dimensions.draggables[state.critical.draggable.id];
      var droppable = impact && impact.destination ? dimensions.droppables[impact.destination.droppableId] : null;
      var source = {
        index: critical.draggable.index,
        droppableId: critical.droppable.id
      };
      var destination = reason === 'DROP' ? impact.destination : null;
      var result = {
        draggableId: draggable.descriptor.id,
        type: home.descriptor.type,
        source: source,
        destination: destination,
        reason: reason
      };

      var clientOffset = function () {
        if (reason === 'CANCEL') {
          return origin;
        }

        var newBorderBoxClientCenter = getNewHomeClientBorderBoxCenter({
          movement: impact.movement,
          draggable: draggable,
          draggables: dimensions.draggables,
          destination: droppable
        });
        return subtract(newBorderBoxClientCenter, draggable.client.borderBox.center);
      }();

      var newHomeOffset = add(clientOffset, getScrollDisplacement(droppable || home, state.viewport));
      var isAnimationRequired = !isEqual(state.current.client.offset, newHomeOffset);
      var pending = {
        newHomeOffset: newHomeOffset,
        result: result,
        impact: impact
      };

      if (isAnimationRequired) {
        dispatch(animateDrop(pending));
        return;
      }

      dispatch(completeDrop(result));
    };
  };
});

var onDragStart = function onDragStart(start) {
  return "\n  You have lifted an item in position " + (start.source.index + 1) + ".\n  Use the arrow keys to move, space bar to drop, and escape to cancel.\n";
};

var onDragUpdate = function onDragUpdate(update) {
  if (!update.destination) {
    return 'You are currently not dragging over a droppable area';
  }

  if (update.source.droppableId === update.destination.droppableId) {
    return "You have moved the item to position " + (update.destination.index + 1);
  }

  return "\n    You have moved the item from list " + update.source.droppableId + " in position " + (update.source.index + 1) + "\n    to list " + update.destination.droppableId + " in position " + (update.destination.index + 1) + "\n  ";
};

var onDragEnd = function onDragEnd(result) {
  if (result.reason === 'CANCEL') {
    return "\n      Movement cancelled.\n      The item has returned to its starting position of " + (result.source.index + 1) + "\n    ";
  }

  if (!result.destination) {
    return "\n      The item has been dropped while not over a droppable location.\n      The item has returned to its starting position of " + (result.source.index + 1) + "\n    ";
  }

  if (result.source.droppableId === result.destination.droppableId) {
    if (result.source.index === result.destination.index) {
      return "\n        You have dropped the item.\n        It has been dropped on its starting position of " + (result.source.index + 1) + "\n      ";
    }

    return "\n      You have dropped the item.\n      It has moved from position " + (result.source.index + 1) + " to " + (result.destination.index + 1) + "\n    ";
  }

  return "\n    You have dropped the item.\n    It has moved from position " + (result.source.index + 1) + " in list " + result.source.droppableId + "\n    to position " + (result.destination.index + 1) + " in list " + result.destination.droppableId + "\n  ";
};

var preset = {
  onDragStart: onDragStart,
  onDragUpdate: onDragUpdate,
  onDragEnd: onDragEnd
};

var records = {};
var flag = '__react-beautiful-dnd-debug-timings-hook__';

var isTimingsEnabled = function isTimingsEnabled() {
  return Boolean(window[flag]);
};

var start = function start(key) {
  if (process.env.NODE_ENV !== 'production') {
    if (!isTimingsEnabled()) {
      return;
    }

    var now = performance.now();
    records[key] = now;
  }
};
var finish = function finish(key) {
  if (process.env.NODE_ENV !== 'production') {
    if (!isTimingsEnabled()) {
      return;
    }

    var now = performance.now();
    var previous = records[key];
    !previous ? process.env.NODE_ENV !== "production" ? invariant(false, 'cannot finish timing as no previous time found') : invariant(false) : void 0;
    var result = now - previous;
    var rounded = result.toFixed(2);

    var style = function () {
      if (result < 16) {
        return {
          textColor: 'green',
          symbol: '✅'
        };
      }

      if (result < 40) {
        return {
          textColor: 'orange',
          symbol: '⚠️'
        };
      }

      return {
        textColor: 'red',
        symbol: '❌'
      };
    }();

    console.log(style.symbol + " %cTiming %c" + rounded + " %cms %c" + key, 'color: blue; font-weight: bold; ', "color: " + style.textColor + "; font-size: 1.1em;", 'color: grey;', 'color: purple; font-weight: bold;');
  }
};

var withTimings = function withTimings(key, fn) {
  start(key);
  fn();
  finish(key);
};

var areLocationsEqual = function areLocationsEqual(first, second) {
  if (first == null && second == null) {
    return true;
  }

  if (first == null || second == null) {
    return false;
  }

  return first.droppableId === second.droppableId && first.index === second.index;
};

var isCriticalEqual = function isCriticalEqual(first, second) {
  if (first === second) {
    return true;
  }

  var isDraggableEqual = first.draggable.id === second.draggable.id && first.draggable.droppableId === second.draggable.droppableId && first.draggable.type === second.draggable.type && first.draggable.index === second.draggable.index;
  var isDroppableEqual = first.droppable.id === second.droppable.id && first.droppable.type === second.droppable.type;
  return isDraggableEqual && isDroppableEqual;
};

var getExpiringAnnounce = function getExpiringAnnounce(announce) {
  var wasCalled = false;
  var isExpired = false;
  setTimeout(function () {
    isExpired = true;
  });

  var result = function result(message) {
    if (wasCalled) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn('Announcement already made. Not making a second announcement');
      }

      return;
    }

    if (isExpired) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn("\n          Announcements cannot be made asynchronously.\n          Default message has already been announced.\n        ");
      }

      return;
    }

    wasCalled = true;
    announce(message);
  };

  result.wasCalled = function () {
    return wasCalled;
  };

  return result;
};

var getDragStart = function getDragStart(critical) {
  return {
    draggableId: critical.draggable.id,
    type: critical.droppable.type,
    source: {
      droppableId: critical.droppable.id,
      index: critical.draggable.index
    }
  };
};

var hooks = (function (getHooks, announce) {
  var execute = function execute(hook, data, getDefaultMessage) {
    if (!hook) {
      announce(getDefaultMessage(data));
      return;
    }

    var willExpire = getExpiringAnnounce(announce);
    var provided = {
      announce: willExpire
    };
    hook(data, provided);

    if (!willExpire.wasCalled()) {
      announce(getDefaultMessage(data));
    }
  };

  var publisher = function () {
    var lastLocation = null;
    var lastCritical = null;
    var _isDragStartPublished = false;

    var start$$1 = function start$$1(critical) {
      !!_isDragStartPublished ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot fire onDragStart as a drag start has already been published') : invariant(false) : void 0;
      var data = getDragStart(critical);
      _isDragStartPublished = true;
      lastCritical = critical;
      lastLocation = data.source;
      withTimings('onDragStart', function () {
        return execute(getHooks().onDragStart, data, preset.onDragStart);
      });
    };

    var move = function move(critical, location) {
      !(_isDragStartPublished && lastCritical) ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot fire onDragMove when onDragStart has not been called') : invariant(false) : void 0;
      var hasCriticalChanged = !isCriticalEqual(critical, lastCritical);

      if (hasCriticalChanged) {
        lastCritical = critical;
      }

      var hasLocationChanged = !areLocationsEqual(lastLocation, location);

      if (hasLocationChanged) {
        lastLocation = location;
      }

      if (!hasCriticalChanged && !hasLocationChanged) {
        return;
      }

      var data = _extends({}, getDragStart(critical), {
        destination: location
      });

      withTimings('onDragUpdate', function () {
        return execute(getHooks().onDragUpdate, data, preset.onDragUpdate);
      });
    };

    var drop = function drop(result) {
      !_isDragStartPublished ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot fire onDragEnd when there is no matching onDragStart') : invariant(false) : void 0;
      _isDragStartPublished = false;
      lastLocation = null;
      lastCritical = null;
      withTimings('onDragEnd', function () {
        return execute(getHooks().onDragEnd, result, preset.onDragEnd);
      });
    };

    var abort = function abort() {
      !(_isDragStartPublished && lastCritical) ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot cancel when onDragStart not fired') : invariant(false) : void 0;

      var result = _extends({}, getDragStart(lastCritical), {
        destination: null,
        reason: 'CANCEL'
      });

      drop(result);
    };

    return {
      start: start$$1,
      move: move,
      drop: drop,
      abort: abort,
      isDragStartPublished: function isDragStartPublished() {
        return _isDragStartPublished;
      }
    };
  }();

  return function (store) {
    return function (next) {
      return function (action) {
        next(action);

        if (action.type === 'INITIAL_PUBLISH') {
          var critical = action.payload.critical;
          publisher.start(critical);
          return;
        }

        if (action.type === 'DROP_COMPLETE') {
          var result = action.payload;
          publisher.drop(result);
          return;
        }

        if (action.type === 'CLEAN') {
          if (publisher.isDragStartPublished()) {
            publisher.abort();
          }

          return;
        }

        if (!publisher.isDragStartPublished()) {
          return;
        }

        var state = store.getState();

        if (state.phase === 'DRAGGING') {
          publisher.move(state.critical, state.impact.destination);
        }
      };
    };
  };
});

var dropAnimationFinish = (function (store) {
  return function (next) {
    return function (action) {
      if (action.type !== 'DROP_ANIMATION_FINISHED') {
        next(action);
        return;
      }

      var state = store.getState();
      !(state.phase === 'DROP_ANIMATING') ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot finish a drop animating when no drop is occurring') : invariant(false) : void 0;
      store.dispatch(completeDrop(state.pending.result));
    };
  };
});

var dimensionMarshalStopper = (function (getMarshal) {
  return function () {
    return function (next) {
      return function (action) {
        if (action.type === 'DROP_COMPLETE' || action.type === 'CLEAN' || action.type === 'DROP_ANIMATE') {
          var marshal = getMarshal();
          marshal.stopPublishing();
        }

        next(action);
      };
    };
  };
});

var shouldCancel = function shouldCancel(action) {
  return action.type === 'CANCEL' || action.type === 'DROP_ANIMATE' || action.type === 'DROP' || action.type === 'DROP_COMPLETE' || action.type === 'COLLECTION_STARTING';
};

var autoScroll = (function (getScroller) {
  return function (store) {
    return function (next) {
      return function (action) {
        if (shouldCancel(action)) {
          getScroller().cancel();
          next(action);
          return;
        }

        next(action);
        var state = store.getState();

        if (state.phase !== 'DRAGGING') {
          return;
        }

        if (state.autoScrollMode === 'FLUID') {
          getScroller().fluidScroll(state);
          return;
        }

        if (!state.scrollJumpRequest) {
          return;
        }

        getScroller().jumpScroll(state);
      };
    };
  };
});

var shouldCheckOnAction = function shouldCheckOnAction(action) {
  return action.type === 'MOVE' || action.type === 'MOVE_UP' || action.type === 'MOVE_RIGHT' || action.type === 'MOVE_DOWN' || action.type === 'MOVE_LEFT' || action.type === 'MOVE_BY_WINDOW_SCROLL';
};

var hasDroppableOverChanged = function hasDroppableOverChanged(previous, current) {
  if (!previous) {
    return Boolean(current);
  }

  if (!current) {
    return Boolean(previous);
  }

  return previous.droppableId !== current.droppableId;
};

var getNewMaxScroll = function getNewMaxScroll(previous, current, action) {
  if (!shouldCheckOnAction(action)) {
    return null;
  }

  if (!isMovementAllowed(previous) || !isMovementAllowed(current)) {
    return null;
  }

  if (!hasDroppableOverChanged(previous.impact.destination, current.impact.destination)) {
    return null;
  }

  var viewport = current.viewport;
  var doc = document.documentElement;
  !doc ? process.env.NODE_ENV !== "production" ? invariant(false, 'Could not find document.documentElement') : invariant(false) : void 0;
  var maxScroll = getMaxScroll({
    scrollHeight: doc.scrollHeight,
    scrollWidth: doc.scrollWidth,
    width: viewport.frame.width,
    height: viewport.frame.height
  });

  if (isEqual(maxScroll, viewport.scroll.max)) {
    return null;
  }

  return maxScroll;
};

var maxScrollUpdater = (function (store) {
  return function (next) {
    return function (action) {
      var previous = store.getState();
      next(action);
      var current = store.getState();
      var maxScroll = getNewMaxScroll(previous, current, action);

      if (maxScroll) {
        next(updateViewportMaxScroll(maxScroll));
      }
    };
  };
});

var composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : redux.compose;
var createStore = (function (_ref) {
  var getDimensionMarshal = _ref.getDimensionMarshal,
      styleMarshal = _ref.styleMarshal,
      getHooks = _ref.getHooks,
      announce = _ref.announce,
      getScroller = _ref.getScroller;
  return redux.createStore(reducer, composeEnhancers(redux.applyMiddleware(style(styleMarshal), dimensionMarshalStopper(getDimensionMarshal), lift$1(getDimensionMarshal), drop$1, dropAnimationFinish, maxScrollUpdater, autoScroll(getScroller), hooks(getHooks, announce))));
});

var getEmptyMap = function getEmptyMap() {
  return {
    draggables: {},
    droppables: {}
  };
};

var timingKey = 'Publish collection from DOM';
var createPublisher = (function (_ref) {
  var getProvided = _ref.getProvided,
      callbacks = _ref.callbacks;

  var advancedUsageWarning = function () {
    if (process.env.NODE_ENV === 'production') {
      return function () {};
    }

    var hasAnnounced = false;
    return function () {
      if (hasAnnounced) {
        return;
      }

      hasAnnounced = true;

      if (process.env.NODE_ENV === 'production') {
        return;
      }

      console.warn("\n        Advanced usage warning: you are adding or removing a dimension during a drag\n        This an advanced feature used to support dynamic interactions such as lazy loading lists.\n\n        Keep in mind the following restrictions:\n\n        - Draggable's can only be added to Droppable's that are scroll containers\n        - Adding a Droppable cannot impact the placement of other Droppables\n          (it cannot push a Droppable on the page)\n\n        (This warning will be stripped in production builds)\n      ".trim());
    };
  }();

  var additions = getEmptyMap();
  var removals = getEmptyMap();
  var frameId = null;

  var reset = function reset() {
    additions = getEmptyMap();
    removals = getEmptyMap();
  };

  var collect = function collect() {
    advancedUsageWarning();

    if (frameId) {
      return;
    }

    frameId = requestAnimationFrame(function () {
      frameId = null;
      callbacks.collectionStarting();
      start(timingKey);

      var _getProvided = getProvided(),
          entries = _getProvided.entries,
          collection = _getProvided.collection;

      var windowScroll = collection.initialWindowScroll;

      var draggables = _Object$keys(additions.draggables).map(function (id) {
        return entries.draggables[id].getDimension(windowScroll);
      });

      var droppables = _Object$keys(additions.droppables).map(function (id) {
        return entries.droppables[id].callbacks.getDimensionAndWatchScroll(windowScroll, collection.scrollOptions);
      });

      var result = {
        additions: {
          draggables: draggables,
          droppables: droppables
        },
        removals: {
          draggables: _Object$keys(removals.draggables),
          droppables: _Object$keys(removals.droppables)
        }
      };
      reset();
      finish(timingKey);
      callbacks.publish(result);
    });
  };

  var addDraggable = function addDraggable(id) {
    additions.draggables[id] = true;

    if (removals.draggables[id]) {
      delete removals.draggables[id];
    }

    collect();
  };

  var removeDraggable = function removeDraggable(id) {
    removals.draggables[id] = true;

    if (additions.draggables[id]) {
      delete additions.draggables[id];
    }

    collect();
  };

  var addDroppable = function addDroppable(id) {
    additions.droppables[id] = true;

    if (removals.droppables[id]) {
      delete removals.droppables[id];
    }

    collect();
  };

  var removeDroppable = function removeDroppable(id) {
    removals.droppables[id] = true;

    if (additions.droppables[id]) {
      delete additions.droppables[id];
    }

    collect();
  };

  var stop = function stop() {
    if (!frameId) {
      return;
    }

    cancelAnimationFrame(frameId);
    frameId = null;
    reset();
  };

  return {
    addDraggable: addDraggable,
    removeDraggable: removeDraggable,
    addDroppable: addDroppable,
    removeDroppable: removeDroppable,
    stop: stop
  };
});

var createDimensionMarshal = (function (callbacks) {
  var entries = {
    droppables: {},
    draggables: {}
  };
  var collection = null;
  var publisher = createPublisher({
    callbacks: {
      publish: callbacks.publish,
      collectionStarting: callbacks.collectionStarting
    },
    getProvided: function getProvided() {
      !collection ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot get scroll options when there is no collection') : invariant(false) : void 0;
      return {
        entries: entries,
        collection: collection
      };
    }
  });

  var registerDraggable = function registerDraggable(descriptor, getDimension) {
    var entry = {
      descriptor: descriptor,
      getDimension: getDimension
    };
    entries.draggables[descriptor.id] = entry;

    if (!collection) {
      return;
    }

    if (collection.critical.draggable.type !== descriptor.type) {
      return;
    }

    publisher.addDraggable(descriptor.id);
  };

  var updateDraggable = function updateDraggable(previous, descriptor, getDimension) {
    !entries.draggables[previous.id] ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot update draggable registration as no previous registration was found') : invariant(false) : void 0;
    delete entries.draggables[previous.id];
    var entry = {
      descriptor: descriptor,
      getDimension: getDimension
    };
    entries.draggables[descriptor.id] = entry;
  };

  var unregisterDraggable = function unregisterDraggable(descriptor) {
    var entry = entries.draggables[descriptor.id];
    !entry ? process.env.NODE_ENV !== "production" ? invariant(false, "Cannot unregister Draggable with id " + descriptor.id + " as it is not registered") : invariant(false) : void 0;

    if (entry.descriptor !== descriptor) {
      return;
    }

    delete entries.draggables[descriptor.id];

    if (!collection) {
      return;
    }

    !(collection.critical.draggable.id !== descriptor.id) ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot remove the dragging item during a drag') : invariant(false) : void 0;

    if (descriptor.type !== collection.critical.draggable.type) {
      return;
    }

    publisher.removeDraggable(descriptor.id);
  };

  var registerDroppable = function registerDroppable(descriptor, droppableCallbacks) {
    var id = descriptor.id;
    entries.droppables[id] = {
      descriptor: descriptor,
      callbacks: droppableCallbacks
    };

    if (!collection) {
      return;
    }

    if (descriptor.type !== collection.critical.droppable.type) {
      return;
    }

    publisher.addDroppable(id);
  };

  var updateDroppable = function updateDroppable(previous, descriptor, droppableCallbacks) {
    !entries.droppables[previous.id] ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot update droppable registration as no previous registration was found') : invariant(false) : void 0;
    delete entries.droppables[previous.id];
    var entry = {
      descriptor: descriptor,
      callbacks: droppableCallbacks
    };
    entries.droppables[descriptor.id] = entry;

    if (collection) {
      process.env.NODE_ENV !== "production" ? invariant(false, 'You are not able to update the id or type of a droppable during a drag') : invariant(false);
    }
  };

  var unregisterDroppable = function unregisterDroppable(descriptor) {
    var entry = entries.droppables[descriptor.id];
    !entry ? process.env.NODE_ENV !== "production" ? invariant(false, "Cannot unregister Droppable with id " + descriptor.id + " as as it is not registered") : invariant(false) : void 0;

    if (entry.descriptor !== descriptor) {
      return;
    }

    delete entries.droppables[descriptor.id];

    if (!collection) {
      return;
    }

    !(collection.critical.droppable.id !== descriptor.id) ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot remove the home Droppable during a drag') : invariant(false) : void 0;

    if (collection.critical.droppable.type !== descriptor.type) {
      return;
    }

    publisher.removeDroppable(descriptor.id);
  };

  var updateDroppableIsEnabled = function updateDroppableIsEnabled(id, isEnabled) {
    !entries.droppables[id] ? process.env.NODE_ENV !== "production" ? invariant(false, "Cannot update the scroll on Droppable " + id + " as it is not registered") : invariant(false) : void 0;

    if (!collection) {
      return;
    }

    callbacks.updateDroppableIsEnabled({
      id: id,
      isEnabled: isEnabled
    });
  };

  var updateDroppableScroll = function updateDroppableScroll(id, newScroll) {
    !entries.droppables[id] ? process.env.NODE_ENV !== "production" ? invariant(false, "Cannot update the scroll on Droppable " + id + " as it is not registered") : invariant(false) : void 0;

    if (!collection) {
      return;
    }

    callbacks.updateDroppableScroll({
      id: id,
      offset: newScroll
    });
  };

  var scrollDroppable = function scrollDroppable(id, change) {
    var entry = entries.droppables[id];
    !entry ? process.env.NODE_ENV !== "production" ? invariant(false, "Cannot scroll Droppable " + id + " as it is not registered") : invariant(false) : void 0;

    if (!collection) {
      return;
    }

    entry.callbacks.scroll(change);
  };

  var getInitialPublish = function getInitialPublish(args) {
    var critical = args.critical,
        scrollOptions = args.scrollOptions,
        windowScroll = args.initialWindowScroll;
    var timingKey = 'Initial collection from DOM';
    start(timingKey);
    var home = critical.droppable;

    var droppables = _Object$keys(entries.droppables).map(function (id) {
      return entries.droppables[id];
    }).filter(function (entry) {
      return entry.descriptor.type === home.type;
    }).map(function (entry) {
      return entry.callbacks.getDimensionAndWatchScroll(windowScroll, scrollOptions);
    }).reduce(function (previous, dimension) {
      previous[dimension.descriptor.id] = dimension;
      return previous;
    }, {});

    var draggables = _Object$keys(entries.draggables).map(function (id) {
      return entries.draggables[id];
    }).filter(function (entry) {
      return entry.descriptor.type === critical.draggable.type;
    }).map(function (entry) {
      return entry.getDimension(windowScroll);
    }).reduce(function (previous, dimension) {
      previous[dimension.descriptor.id] = dimension;
      return previous;
    }, {});

    finish(timingKey);
    var dimensions = {
      draggables: draggables,
      droppables: droppables
    };
    var result = {
      dimensions: dimensions,
      critical: critical
    };
    return result;
  };

  var stopPublishing = function stopPublishing() {
    if (!collection) {
      return;
    }

    publisher.stop();
    var home = collection.critical.droppable;

    _Object$keys(entries.droppables).filter(function (id) {
      return entries.droppables[id].descriptor.type === home.type;
    }).forEach(function (id) {
      return entries.droppables[id].callbacks.unwatchScroll();
    });

    collection = null;
  };

  var startPublishing = function startPublishing(request, windowScroll) {
    !!collection ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot start capturing critical dimensions as there is already a collection') : invariant(false) : void 0;
    var entry = entries.draggables[request.draggableId];
    !entry ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot find critical draggable entry') : invariant(false) : void 0;
    var home = entries.droppables[entry.descriptor.droppableId];
    !home ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot find critical droppable entry') : invariant(false) : void 0;
    var critical = {
      draggable: entry.descriptor,
      droppable: home.descriptor
    };
    collection = {
      scrollOptions: request.scrollOptions,
      critical: critical,
      initialWindowScroll: windowScroll
    };
    return getInitialPublish(collection);
  };

  var marshal = {
    registerDraggable: registerDraggable,
    updateDraggable: updateDraggable,
    unregisterDraggable: unregisterDraggable,
    registerDroppable: registerDroppable,
    updateDroppable: updateDroppable,
    unregisterDroppable: unregisterDroppable,
    updateDroppableIsEnabled: updateDroppableIsEnabled,
    scrollDroppable: scrollDroppable,
    updateDroppableScroll: updateDroppableScroll,
    startPublishing: startPublishing,
    stopPublishing: stopPublishing
  };
  return marshal;
});

var physics = function () {
  var base = {
    stiffness: 1000,
    damping: 60,
    precision: 0.99
  };

  var standard = _extends({}, base);

  var fast = _extends({}, base, {
    stiffness: base.stiffness * 2
  });

  return {
    standard: standard,
    fast: fast
  };
}();
var css = {
  outOfTheWay: 'transform 0.2s cubic-bezier(0.2, 0, 0, 1)'
};

var prefix = 'data-react-beautiful-dnd';
var dragHandle = prefix + "-drag-handle";
var draggable = prefix + "-draggable";
var droppable = prefix + "-droppable";

var getStyles = (function (styleContext) {
  var dragHandleSelector = "[" + dragHandle + "=\"" + styleContext + "\"]";
  var draggableSelector = "[" + draggable + "=\"" + styleContext + "\"]";
  var droppableSelector = "[" + droppable + "=\"" + styleContext + "\"]";
  var dragHandleStyles = {
    base: "\n      " + dragHandleSelector + " {\n        -webkit-touch-callout: none;\n        -webkit-tap-highlight-color: rgba(0,0,0,0);\n        touch-action: manipulation;\n      }\n    ",
    grabCursor: "\n      " + dragHandleSelector + " {\n        cursor: -webkit-grab;\n        cursor: grab;\n      }\n    ",
    blockPointerEvents: "\n      " + dragHandleSelector + " {\n        pointer-events: none;\n      }\n    "
  };
  var draggableStyles = {
    animateMovement: "\n      " + draggableSelector + " {\n        transition: " + css.outOfTheWay + ";\n      }\n    "
  };
  var droppableStyles = {
    base: "\n      " + droppableSelector + " {\n        overflow-anchor: none;\n      }\n    "
  };
  var bodyStyles = {
    whileActiveDragging: "\n      body {\n        cursor: grabbing;\n        cursor: -webkit-grabbing;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n      }\n    "
  };
  var base = [dragHandleStyles.base, droppableStyles.base];
  var resting = base.concat([dragHandleStyles.grabCursor]);
  var collecting = base.concat([dragHandleStyles.blockPointerEvents, bodyStyles.whileActiveDragging]);
  var dragging = collecting.concat([draggableStyles.animateMovement]);
  var dropAnimating = base.concat([dragHandleStyles.grabCursor, draggableStyles.animateMovement]);
  var userCancel = base.concat([draggableStyles.animateMovement]);
  return {
    resting: resting.join(''),
    dragging: dragging.join(''),
    dropAnimating: dropAnimating.join(''),
    collecting: collecting.join(''),
    userCancel: userCancel.join('')
  };
});

var count = 0;
var resetStyleContext = function resetStyleContext() {
  count = 0;
};

var getHead = function getHead() {
  var head = document.querySelector('head');
  !head ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot find the head to append a style to') : invariant(false) : void 0;
  return head;
};

var createStyleMarshal = (function () {
  var context = "" + count++;
  var styles = getStyles(context);
  var el = null;
  var setStyle = memoizeOne(function (proposed) {
    !el ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot set style of style tag if not mounted') : invariant(false) : void 0;
    el.innerHTML = proposed;
  });

  var mount = function mount() {
    !!el ? process.env.NODE_ENV !== "production" ? invariant(false, 'Style marshal already mounted') : invariant(false) : void 0;
    el = document.createElement('style');
    el.type = 'text/css';
    el.setAttribute(prefix, context);
    getHead().appendChild(el);
    setStyle(styles.resting);
  };

  var collecting = function collecting() {
    return setStyle(styles.collecting);
  };

  var dragging = function dragging() {
    return setStyle(styles.dragging);
  };

  var dropping = function dropping(reason) {
    if (reason === 'DROP') {
      setStyle(styles.dropAnimating);
      return;
    }

    setStyle(styles.userCancel);
  };

  var resting = function resting() {
    return setStyle(styles.resting);
  };

  var unmount = function unmount() {
    !el ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot unmount style marshal as it is already unmounted') : invariant(false) : void 0;
    getHead().removeChild(el);
    el = null;
  };

  var marshal = {
    collecting: collecting,
    dragging: dragging,
    dropping: dropping,
    resting: resting,
    styleContext: context,
    mount: mount,
    unmount: unmount
  };
  return marshal;
});

var canStartDrag = (function (state, id) {
  if (state.phase === 'IDLE') {
    return true;
  }

  if (state.phase !== 'DROP_ANIMATING') {
    return false;
  }

  if (state.pending.result.draggableId === id) {
    return false;
  }

  return state.pending.result.reason === 'DROP';
});

var scrollWindow = (function (change) {
  window.scrollBy(change.x, change.y);
});

var count$1 = 0;
var visuallyHidden = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  margin: '-1px',
  border: '0',
  padding: '0',
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  'clip-path': 'inset(100%)'
};

var getBody = function getBody() {
  !document.body ? process.env.NODE_ENV !== "production" ? invariant(false, 'Announcer cannot find document.body') : invariant(false) : void 0;
  return document.body;
};

var createAnnouncer = (function () {
  var id = "react-beautiful-dnd-announcement-" + count$1++;
  var el = null;

  var announce = function announce(message) {
    !el ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot announce to unmounted node') : invariant(false) : void 0;
    el.textContent = message;
  };

  var mount = function mount() {
    !!el ? process.env.NODE_ENV !== "production" ? invariant(false, 'Announcer already mounted') : invariant(false) : void 0;
    el = document.createElement('div');
    el.id = id;
    el.setAttribute('aria-live', 'assertive');
    el.setAttribute('role', 'log');
    el.setAttribute('aria-atomic', 'true');

    _Object$assign(el.style, visuallyHidden);

    getBody().appendChild(el);
  };

  var unmount = function unmount() {
    !el ? process.env.NODE_ENV !== "production" ? invariant(false, 'Will not unmount annoucer as it is already unmounted') : invariant(false) : void 0;
    getBody().removeChild(el);
    el = null;
  };

  var announcer = {
    announce: announce,
    id: id,
    mount: mount,
    unmount: unmount
  };
  return announcer;
});

var getScrollableDroppables = memoizeOne(function (droppables) {
  return toDroppableList(droppables).filter(function (droppable) {
    if (!droppable.isEnabled) {
      return false;
    }

    if (!droppable.viewport.closestScrollable) {
      return false;
    }

    return true;
  });
});

var getScrollableDroppableOver = function getScrollableDroppableOver(target, droppables) {
  var maybe = getScrollableDroppables(droppables).find(function (droppable) {
    !droppable.viewport.closestScrollable ? process.env.NODE_ENV !== "production" ? invariant(false, 'Invalid result') : invariant(false) : void 0;
    return isPositionInFrame(droppable.viewport.closestScrollable.framePageMarginBox)(target);
  });
  return maybe;
};

var getBestScrollableDroppable = (function (_ref) {
  var center = _ref.center,
      destination = _ref.destination,
      droppables = _ref.droppables;

  if (destination) {
    var _dimension = droppables[destination.droppableId];

    if (!_dimension.viewport.closestScrollable) {
      return null;
    }

    return _dimension;
  }

  var dimension = getScrollableDroppableOver(center, droppables);
  return dimension;
});

var smallestSigned = apply(function (value) {
  if (value === 0) {
    return 0;
  }

  return value > 0 ? 1 : -1;
});
var getOverlap = function () {
  var getRemainder = function getRemainder(target, max) {
    if (target < 0) {
      return target;
    }

    if (target > max) {
      return target - max;
    }

    return 0;
  };

  return function (_ref) {
    var current = _ref.current,
        max = _ref.max,
        change = _ref.change;
    var targetScroll = add(current, change);
    var overlap = {
      x: getRemainder(targetScroll.x, max.x),
      y: getRemainder(targetScroll.y, max.y)
    };

    if (isEqual(overlap, origin)) {
      return null;
    }

    return overlap;
  };
}();
var canPartiallyScroll = function canPartiallyScroll(_ref2) {
  var rawMax = _ref2.max,
      current = _ref2.current,
      change = _ref2.change;
  var max = {
    x: Math.max(current.x, rawMax.x),
    y: Math.max(current.y, rawMax.y)
  };
  var smallestChange = smallestSigned(change);
  var overlap = getOverlap({
    max: max,
    current: current,
    change: smallestChange
  });

  if (!overlap) {
    return true;
  }

  if (smallestChange.x !== 0 && overlap.x === 0) {
    return true;
  }

  if (smallestChange.y !== 0 && overlap.y === 0) {
    return true;
  }

  return false;
};
var canScrollWindow = function canScrollWindow(viewport, change) {
  return canPartiallyScroll({
    current: viewport.scroll.current,
    max: viewport.scroll.max,
    change: change
  });
};
var getWindowOverlap = function getWindowOverlap(viewport, change) {
  if (!canScrollWindow(viewport, change)) {
    return null;
  }

  var max = viewport.scroll.max;
  var current = viewport.scroll.current;
  return getOverlap({
    current: current,
    max: max,
    change: change
  });
};
var canScrollDroppable = function canScrollDroppable(droppable, change) {
  var closest$$1 = droppable.viewport.closestScrollable;

  if (!closest$$1) {
    return false;
  }

  return canPartiallyScroll({
    current: closest$$1.scroll.current,
    max: closest$$1.scroll.max,
    change: change
  });
};
var getDroppableOverlap = function getDroppableOverlap(droppable, change) {
  var closest$$1 = droppable.viewport.closestScrollable;

  if (!closest$$1) {
    return null;
  }

  if (!canScrollDroppable(droppable, change)) {
    return null;
  }

  return getOverlap({
    current: closest$$1.scroll.current,
    max: closest$$1.scroll.max,
    change: change
  });
};

var config = {
  startFrom: 0.25,
  maxSpeedAt: 0.05,
  maxScrollSpeed: 28,
  ease: function ease(percentage) {
    return Math.pow(percentage, 2);
  }
};
var clean$1 = apply(function (value) {
  return value === 0 ? 0 : value;
});
var getPixelThresholds = function getPixelThresholds(container, axis) {
  var startFrom = container[axis.size] * config.startFrom;
  var maxSpeedAt = container[axis.size] * config.maxSpeedAt;
  var accelerationPlane = startFrom - maxSpeedAt;
  var thresholds = {
    startFrom: startFrom,
    maxSpeedAt: maxSpeedAt,
    accelerationPlane: accelerationPlane
  };
  return thresholds;
};

var getSpeed = function getSpeed(distance$$1, thresholds) {
  if (distance$$1 >= thresholds.startFrom) {
    return 0;
  }

  if (distance$$1 <= thresholds.maxSpeedAt) {
    return config.maxScrollSpeed;
  }

  var distancePastStart = thresholds.startFrom - distance$$1;
  var percentage = distancePastStart / thresholds.accelerationPlane;
  var transformed = config.ease(percentage);
  var speed = config.maxScrollSpeed * transformed;
  return speed;
};

var adjustForSizeLimits = function adjustForSizeLimits(_ref) {
  var container = _ref.container,
      subject = _ref.subject,
      proposedScroll = _ref.proposedScroll;
  var isTooBigVertically = subject.height > container.height;
  var isTooBigHorizontally = subject.width > container.width;

  if (!isTooBigHorizontally && !isTooBigVertically) {
    return proposedScroll;
  }

  if (isTooBigHorizontally && isTooBigVertically) {
    return null;
  }

  return {
    x: isTooBigHorizontally ? 0 : proposedScroll.x,
    y: isTooBigVertically ? 0 : proposedScroll.y
  };
};

var getRequiredScroll = function getRequiredScroll(_ref2) {
  var container = _ref2.container,
      subject = _ref2.subject,
      center = _ref2.center;
  var distance$$1 = {
    top: center.y - container.top,
    right: container.right - center.x,
    bottom: container.bottom - center.y,
    left: center.x - container.left
  };

  var y = function () {
    var thresholds = getPixelThresholds(container, vertical);
    var isCloserToBottom = distance$$1.bottom < distance$$1.top;

    if (isCloserToBottom) {
      return getSpeed(distance$$1.bottom, thresholds);
    }

    return -1 * getSpeed(distance$$1.top, thresholds);
  }();

  var x = function () {
    var thresholds = getPixelThresholds(container, horizontal);
    var isCloserToRight = distance$$1.right < distance$$1.left;

    if (isCloserToRight) {
      return getSpeed(distance$$1.right, thresholds);
    }

    return -1 * getSpeed(distance$$1.left, thresholds);
  }();

  var required = clean$1({
    x: x,
    y: y
  });

  if (isEqual(required, origin)) {
    return null;
  }

  var limited = adjustForSizeLimits({
    container: container,
    subject: subject,
    proposedScroll: required
  });

  if (!limited) {
    return null;
  }

  return isEqual(limited, origin) ? null : limited;
};

var withPlaceholder = function withPlaceholder(droppable, draggable) {
  var closest$$1 = droppable.viewport.closestScrollable;

  if (!closest$$1) {
    return null;
  }

  var isOverHome = droppable.descriptor.id === draggable.descriptor.droppableId;
  var max = closest$$1.scroll.max;
  var current = closest$$1.scroll.current;

  if (isOverHome) {
    return {
      max: max,
      current: current
    };
  }

  var spaceForPlaceholder = patch(droppable.axis.line, draggable.placeholder.client.borderBox[droppable.axis.size]);
  var newMax = add(max, spaceForPlaceholder);
  var newCurrent = {
    x: Math.min(current.x, newMax.x),
    y: Math.min(current.y, newMax.y)
  };
  return {
    max: newMax,
    current: newCurrent
  };
};

var createFluidScroller = (function (_ref3) {
  var scrollWindow = _ref3.scrollWindow,
      scrollDroppable = _ref3.scrollDroppable;
  var scheduleWindowScroll = rafSchd(scrollWindow);
  var scheduleDroppableScroll = rafSchd(scrollDroppable);

  var scroller = function scroller(state) {
    var center = state.current.page.borderBoxCenter;
    var draggable = state.dimensions.draggables[state.critical.draggable.id];
    var subject = draggable.page.marginBox;
    var viewport = state.viewport;
    var requiredWindowScroll = getRequiredScroll({
      container: viewport.frame,
      subject: subject,
      center: center
    });

    if (requiredWindowScroll && canScrollWindow(viewport, requiredWindowScroll)) {
      scheduleWindowScroll(requiredWindowScroll);
      return;
    }

    var droppable = getBestScrollableDroppable({
      center: center,
      destination: state.impact.destination,
      droppables: state.dimensions.droppables
    });

    if (!droppable) {
      return;
    }

    var closestScrollable = droppable.viewport.closestScrollable;

    if (!closestScrollable) {
      return;
    }

    var requiredFrameScroll = getRequiredScroll({
      container: closestScrollable.framePageMarginBox,
      subject: subject,
      center: center
    });

    if (!requiredFrameScroll) {
      return;
    }

    var result = withPlaceholder(droppable, draggable);

    if (!result) {
      return;
    }

    var closest$$1 = droppable.viewport.closestScrollable;

    if (!closest$$1) {
      return;
    }

    var canScrollDroppable$$1 = canPartiallyScroll({
      current: result.current,
      max: result.max,
      change: requiredFrameScroll
    });

    if (canScrollDroppable$$1) {
      scheduleDroppableScroll(droppable.descriptor.id, requiredFrameScroll);
    }
  };

  scroller.cancel = function () {
    scheduleWindowScroll.cancel();
    scheduleDroppableScroll.cancel();
  };

  return scroller;
});

var createJumpScroller = (function (_ref) {
  var move = _ref.move,
      scrollDroppable = _ref.scrollDroppable,
      scrollWindow = _ref.scrollWindow;

  var moveByOffset = function moveByOffset(state, offset) {
    var client = add(state.current.client.selection, offset);
    move({
      client: client,
      shouldAnimate: true
    });
  };

  var scrollDroppableAsMuchAsItCan = function scrollDroppableAsMuchAsItCan(droppable, change) {
    if (!canScrollDroppable(droppable, change)) {
      return change;
    }

    var overlap = getDroppableOverlap(droppable, change);

    if (!overlap) {
      scrollDroppable(droppable.descriptor.id, change);
      return null;
    }

    var whatTheDroppableCanScroll = subtract(change, overlap);
    scrollDroppable(droppable.descriptor.id, whatTheDroppableCanScroll);
    var remainder = subtract(change, whatTheDroppableCanScroll);
    return remainder;
  };

  var scrollWindowAsMuchAsItCan = function scrollWindowAsMuchAsItCan(viewport, change) {
    if (!canScrollWindow(viewport, change)) {
      return change;
    }

    var overlap = getWindowOverlap(viewport, change);

    if (!overlap) {
      scrollWindow(change);
      return null;
    }

    var whatTheWindowCanScroll = subtract(change, overlap);
    scrollWindow(whatTheWindowCanScroll);
    var remainder = subtract(change, whatTheWindowCanScroll);
    return remainder;
  };

  var jumpScroller = function jumpScroller(state) {
    var request = state.scrollJumpRequest;

    if (!request) {
      return;
    }

    var destination = state.impact.destination;
    !destination ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot perform a jump scroll when there is no destination') : invariant(false) : void 0;
    var droppableRemainder = scrollDroppableAsMuchAsItCan(state.dimensions.droppables[destination.droppableId], request);

    if (!droppableRemainder) {
      return;
    }

    var viewport = state.viewport;
    var windowRemainder = scrollWindowAsMuchAsItCan(viewport, droppableRemainder);

    if (!windowRemainder) {
      return;
    }

    moveByOffset(state, windowRemainder);
  };

  return jumpScroller;
});

var createAutoScroller = (function (_ref) {
  var scrollDroppable = _ref.scrollDroppable,
      scrollWindow = _ref.scrollWindow,
      move = _ref.move;
  var fluidScroll = createFluidScroller({
    scrollWindow: scrollWindow,
    scrollDroppable: scrollDroppable
  });
  var jumpScroll = createJumpScroller({
    move: move,
    scrollWindow: scrollWindow,
    scrollDroppable: scrollDroppable
  });
  var marshal = {
    cancel: fluidScroll.cancel,
    fluidScroll: fluidScroll,
    jumpScroll: jumpScroll
  };
  return marshal;
});

var prefix$1 = function prefix(key) {
  return "private-react-beautiful-dnd-key-do-not-use-" + key;
};

var storeKey = prefix$1('store');
var droppableIdKey = prefix$1('droppable-id');
var droppableTypeKey = prefix$1('droppable-type');
var dimensionMarshalKey = prefix$1('dimension-marshal');
var styleContextKey = prefix$1('style-context');
var canLiftContextKey = prefix$1('can-lift');

var _DragDropContext$chil;
var resetServerContext = function resetServerContext() {
  resetStyleContext();
};

var printFatalDevError = function printFatalDevError(error) {
  if (process.env.NODE_ENV === 'production') {
    return;
  }

  console.warn("\n    An error has occurred while a drag is occurring.\n    Any existing drag will be cancelled.\n\n    Raw error:\n  ");
  console.error(error);
};

var DragDropContext = function (_React$Component) {
  _inheritsLoose(DragDropContext, _React$Component);

  function DragDropContext(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.store = void 0;
    _this.dimensionMarshal = void 0;
    _this.styleMarshal = void 0;
    _this.autoScroller = void 0;
    _this.announcer = void 0;
    _this.unsubscribe = void 0;

    _this.canLift = function (id) {
      return canStartDrag(_this.store.getState(), id);
    };

    _this.onFatalError = function (error) {
      printFatalDevError(error);

      var state = _this.store.getState();

      if (state.phase !== 'IDLE') {
        _this.store.dispatch(clean());
      }
    };

    _this.onWindowError = function (error) {
      return _this.onFatalError(error);
    };

    _this.announcer = createAnnouncer();
    _this.styleMarshal = createStyleMarshal();
    _this.store = createStore({
      getDimensionMarshal: function getDimensionMarshal() {
        return _this.dimensionMarshal;
      },
      styleMarshal: _this.styleMarshal,
      getHooks: function getHooks() {
        return {
          onDragStart: _this.props.onDragStart,
          onDragEnd: _this.props.onDragEnd,
          onDragUpdate: _this.props.onDragUpdate
        };
      },
      announce: _this.announcer.announce,
      getScroller: function getScroller() {
        return _this.autoScroller;
      }
    });
    var callbacks = redux.bindActionCreators({
      collectionStarting: collectionStarting,
      publish: publish,
      updateDroppableScroll: updateDroppableScroll,
      updateDroppableIsEnabled: updateDroppableIsEnabled
    }, _this.store.dispatch);
    _this.dimensionMarshal = createDimensionMarshal(callbacks);
    _this.autoScroller = createAutoScroller(_extends({
      scrollWindow: scrollWindow,
      scrollDroppable: _this.dimensionMarshal.scrollDroppable
    }, redux.bindActionCreators({
      move: move
    }, _this.store.dispatch)));
    return _this;
  }

  var _proto = DragDropContext.prototype;

  _proto.getChildContext = function getChildContext() {
    var _ref;

    return _ref = {}, _ref[storeKey] = this.store, _ref[dimensionMarshalKey] = this.dimensionMarshal, _ref[styleContextKey] = this.styleMarshal.styleContext, _ref[canLiftContextKey] = this.canLift, _ref;
  };

  _proto.componentDidMount = function componentDidMount() {
    window.addEventListener('error', this.onWindowError);
    this.styleMarshal.mount();
    this.announcer.mount();
  };

  _proto.componentDidCatch = function componentDidCatch(error) {
    this.onFatalError(error);

    if (error.message.indexOf('Invariant failed') !== -1) {
      this.setState({});
      return;
    }

    throw error;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.addEventListener('error', this.onWindowError);
    var state = this.store.getState();

    if (state.phase !== 'IDLE') {
      this.store.dispatch(clean());
    }

    this.styleMarshal.unmount();
    this.announcer.unmount();
  };

  _proto.render = function render() {
    return this.props.children;
  };

  return DragDropContext;
}(React__default.Component);

DragDropContext.childContextTypes = (_DragDropContext$chil = {}, _DragDropContext$chil[storeKey] = PropTypes.shape({
  dispatch: PropTypes.func.isRequired,
  subscribe: PropTypes.func.isRequired,
  getState: PropTypes.func.isRequired
}).isRequired, _DragDropContext$chil[dimensionMarshalKey] = PropTypes.object.isRequired, _DragDropContext$chil[styleContextKey] = PropTypes.string.isRequired, _DragDropContext$chil[canLiftContextKey] = PropTypes.func.isRequired, _DragDropContext$chil);

var isScrollable = function isScrollable() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return values.some(function (value) {
    return value === 'auto' || value === 'scroll';
  });
};

var isElementScrollable = function isElementScrollable(el) {
  var style = window.getComputedStyle(el);
  return isScrollable(style.overflow, style.overflowY, style.overflowX);
};

var getClosestScrollable = function getClosestScrollable(el) {
  if (el == null) {
    return null;
  }

  if (!isElementScrollable(el)) {
    return getClosestScrollable(el.parentElement);
  }

  return el;
};

var _DroppableDimensionPu;

var getScroll = function getScroll(el) {
  return {
    x: el.scrollLeft,
    y: el.scrollTop
  };
};

var checkForNestedScrollContainers = function checkForNestedScrollContainers(scrollable) {
  if (process.env.NODE_ENV === 'production') {
    return;
  }

  if (!scrollable) {
    return;
  }

  var anotherScrollParent = getClosestScrollable(scrollable.parentElement);

  if (!anotherScrollParent) {
    return;
  }

  console.warn("\n    Droppable: unsupported nested scroll container detected.\n    A Droppable can only have one scroll parent (which can be itself)\n    Nested scroll containers are currently not supported.\n\n    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131\n  ");
};

var DroppableDimensionPublisher = function (_Component) {
  _inheritsLoose(DroppableDimensionPublisher, _Component);

  function DroppableDimensionPublisher(props, context) {
    var _this;

    _this = _Component.call(this, props, context) || this;
    _this.watchingScroll = null;
    _this.callbacks = void 0;
    _this.publishedDescriptor = null;

    _this.getClosestScroll = function () {
      if (!_this.watchingScroll) {
        return origin;
      }

      return getScroll(_this.watchingScroll.closestScrollable);
    };

    _this.memoizedUpdateScroll = memoizeOne(function (x, y) {
      !_this.publishedDescriptor ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot update scroll on unpublished droppable') : invariant(false) : void 0;
      var newScroll = {
        x: x,
        y: y
      };
      var marshal = _this.context[dimensionMarshalKey];
      marshal.updateDroppableScroll(_this.publishedDescriptor.id, newScroll);
    });

    _this.updateScroll = function () {
      var offset = _this.getClosestScroll();

      _this.memoizedUpdateScroll(offset.x, offset.y);
    };

    _this.scheduleScrollUpdate = rafSchd(_this.updateScroll);

    _this.onClosestScroll = function () {
      !_this.watchingScroll ? process.env.NODE_ENV !== "production" ? invariant(false, 'Could not find scroll options while scrolling') : invariant(false) : void 0;
      var options = _this.watchingScroll.options;

      if (options.shouldPublishImmediately) {
        _this.updateScroll();

        return;
      }

      _this.scheduleScrollUpdate();
    };

    _this.scroll = function (change) {
      !_this.watchingScroll ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot scroll a droppable with no closest scrollable') : invariant(false) : void 0;
      var closestScrollable = _this.watchingScroll.closestScrollable;
      closestScrollable.scrollTop += change.y;
      closestScrollable.scrollLeft += change.x;
    };

    _this.watchScroll = function (closestScrollable, options) {
      !!_this.watchingScroll ? process.env.NODE_ENV !== "production" ? invariant(false, 'Droppable cannot watch scroll as it is already watching scroll') : invariant(false) : void 0;

      if (!closestScrollable) {
        return;
      }

      _this.watchingScroll = {
        options: options,
        closestScrollable: closestScrollable
      };
      closestScrollable.addEventListener('scroll', _this.onClosestScroll, {
        passive: true
      });
    };

    _this.unwatchScroll = function () {
      var watching = _this.watchingScroll;

      if (!watching) {
        return;
      }

      _this.scheduleScrollUpdate.cancel();

      watching.closestScrollable.removeEventListener('scroll', _this.onClosestScroll);
      _this.watchingScroll = null;
    };

    _this.getMemoizedDescriptor = memoizeOne(function (id, type) {
      return {
        id: id,
        type: type
      };
    });

    _this.publish = function () {
      var marshal = _this.context[dimensionMarshalKey];

      var descriptor = _this.getMemoizedDescriptor(_this.props.droppableId, _this.props.type);

      if (!_this.publishedDescriptor) {
        marshal.registerDroppable(descriptor, _this.callbacks);
        _this.publishedDescriptor = descriptor;
        return;
      }

      if (_this.publishedDescriptor === descriptor) {
        return;
      }

      marshal.updateDroppable(_this.publishedDescriptor, descriptor, _this.callbacks);
      _this.publishedDescriptor = descriptor;
    };

    _this.unpublish = function () {
      !_this.publishedDescriptor ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot unpublish descriptor when none is published') : invariant(false) : void 0;
      var marshal = _this.context[dimensionMarshalKey];
      marshal.unregisterDroppable(_this.publishedDescriptor);
      _this.publishedDescriptor = null;
    };

    _this.getDimensionAndWatchScroll = function (windowScroll, options) {
      var _this$props = _this.props,
          direction = _this$props.direction,
          ignoreContainerClipping = _this$props.ignoreContainerClipping,
          isDropDisabled = _this$props.isDropDisabled,
          getDroppableRef = _this$props.getDroppableRef;
      var targetRef = getDroppableRef();
      var descriptor = _this.publishedDescriptor;
      !targetRef ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot calculate a dimension when not attached to the DOM') : invariant(false) : void 0;
      !descriptor ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot get dimension for unpublished droppable') : invariant(false) : void 0;
      var scrollableRef = getClosestScrollable(targetRef);
      checkForNestedScrollContainers(scrollableRef);

      _this.watchScroll(scrollableRef, options);

      var client = function () {
        var base = cssBoxModel.getBox(targetRef);

        if (!scrollableRef) {
          return base;
        }

        if (targetRef !== scrollableRef) {
          return base;
        }

        var top = base.paddingBox.top - scrollableRef.scrollTop;
        var left = base.paddingBox.left - scrollableRef.scrollLeft;
        var bottom = top + scrollableRef.scrollHeight;
        var right = left + scrollableRef.scrollWidth;
        var paddingBox = {
          top: top,
          right: right,
          bottom: bottom,
          left: left
        };
        var borderBox = {
          top: paddingBox.top - base.border.top,
          right: paddingBox.right + base.border.right,
          bottom: paddingBox.bottom + base.border.bottom,
          left: paddingBox.left - base.border.left
        };
        return cssBoxModel.createBox({
          borderBox: borderBox,
          margin: base.margin,
          border: base.border,
          padding: base.padding
        });
      }();

      var page = cssBoxModel.withScroll(client, windowScroll);

      var closest$$1 = function () {
        if (!scrollableRef) {
          return null;
        }

        var frameClient = cssBoxModel.getBox(scrollableRef);
        return {
          client: frameClient,
          page: cssBoxModel.withScroll(frameClient),
          scrollHeight: scrollableRef.scrollHeight,
          scrollWidth: scrollableRef.scrollWidth,
          scroll: getScroll(scrollableRef),
          shouldClipSubject: !ignoreContainerClipping
        };
      }();

      return getDroppableDimension({
        descriptor: descriptor,
        isEnabled: !isDropDisabled,
        direction: direction,
        client: client,
        page: page,
        closest: closest$$1
      });
    };

    var callbacks = {
      getDimensionAndWatchScroll: _this.getDimensionAndWatchScroll,
      unwatchScroll: _this.unwatchScroll,
      scroll: _this.scroll
    };
    _this.callbacks = callbacks;
    return _this;
  }

  var _proto = DroppableDimensionPublisher.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.publish();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    this.publish();

    if (this.props.isDropDisabled === prevProps.isDropDisabled) {
      return;
    }

    var marshal = this.context[dimensionMarshalKey];
    marshal.updateDroppableIsEnabled(this.props.droppableId, !this.props.isDropDisabled);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.watchingScroll) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn('Unmounting droppable while it was watching scroll');
      }

      this.unwatchScroll();
    }

    this.unpublish();
  };

  _proto.render = function render() {
    return this.props.children;
  };

  return DroppableDimensionPublisher;
}(React.Component);

DroppableDimensionPublisher.contextTypes = (_DroppableDimensionPu = {}, _DroppableDimensionPu[dimensionMarshalKey] = PropTypes.object.isRequired, _DroppableDimensionPu);

var Placeholder = function (_PureComponent) {
  _inheritsLoose(Placeholder, _PureComponent);

  function Placeholder() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Placeholder.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount) {
      this.props.onMount();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount) {
      this.props.onUnmount();
    }
  };

  _proto.render = function render() {
    var placeholder = this.props.placeholder;
    var client = placeholder.client,
        display = placeholder.display,
        tagName = placeholder.tagName;
    var style = {
      display: display,
      boxSizing: 'border-box',
      width: client.borderBox.width,
      height: client.borderBox.height,
      marginTop: client.margin.top,
      marginRight: client.margin.right,
      marginBottom: client.margin.bottom,
      marginLeft: client.margin.left,
      flexShrink: '0',
      flexGrow: '0',
      pointerEvents: 'none'
    };
    return React__default.createElement(tagName, {
      style: style
    });
  };

  return Placeholder;
}(React.PureComponent);

var throwIfRefIsInvalid = (function (ref) {
  !(ref && ref instanceof HTMLElement) ? process.env.NODE_ENV !== "production" ? invariant(false, "\n    provided.innerRef has not been provided with a HTMLElement.\n\n    You can find a guide on using the innerRef callback functions at:\n    https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/using-inner-ref.md\n  ") : invariant(false) : void 0;
});

var _Droppable$contextTyp, _Droppable$childConte;

var Droppable = function (_Component) {
  _inheritsLoose(Droppable, _Component);

  function Droppable(props, context) {
    var _this;

    _this = _Component.call(this, props, context) || this;
    _this.styleContext = void 0;
    _this.ref = null;
    _this.isPlaceholderMounted = false;

    _this.onPlaceholderMount = function () {
      _this.isPlaceholderMounted = true;
    };

    _this.onPlaceholderUnmount = function () {
      _this.isPlaceholderMounted = false;
    };

    _this.setRef = function (ref) {
      if (ref === null) {
        return;
      }

      if (ref === _this.ref) {
        return;
      }

      _this.ref = ref;
      throwIfRefIsInvalid(ref);
    };

    _this.getDroppableRef = function () {
      return _this.ref;
    };

    _this.styleContext = context[styleContextKey];
    return _this;
  }

  var _proto = Droppable.prototype;

  _proto.getChildContext = function getChildContext() {
    var _value;

    var value = (_value = {}, _value[droppableIdKey] = this.props.droppableId, _value[droppableTypeKey] = this.props.type, _value);
    return value;
  };

  _proto.componentDidMount = function componentDidMount() {
    throwIfRefIsInvalid(this.ref);
    this.warnIfPlaceholderNotMounted();
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.warnIfPlaceholderNotMounted();
  };

  _proto.warnIfPlaceholderNotMounted = function warnIfPlaceholderNotMounted() {
    if (process.env.NODE_ENV === 'production') {
      return;
    }

    if (!this.props.placeholder) {
      return;
    }

    if (this.isPlaceholderMounted) {
      return;
    }

    console.warn("\n      Droppable setup issue: DroppableProvided > placeholder could not be found.\n      Please be sure to add the {provided.placeholder} Node as a child of your Droppable\n\n      More information: https://github.com/atlassian/react-beautiful-dnd#1-provided-droppableprovided\n    ");
  };

  _proto.getPlaceholder = function getPlaceholder() {
    if (!this.props.placeholder) {
      return null;
    }

    return React__default.createElement(Placeholder, {
      placeholder: this.props.placeholder,
      onMount: this.onPlaceholderMount,
      onUnmount: this.onPlaceholderUnmount
    });
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        direction = _this$props.direction,
        droppableId = _this$props.droppableId,
        ignoreContainerClipping = _this$props.ignoreContainerClipping,
        isDraggingOver = _this$props.isDraggingOver,
        isDropDisabled = _this$props.isDropDisabled,
        draggingOverWith = _this$props.draggingOverWith,
        type = _this$props.type;
    var provided = {
      innerRef: this.setRef,
      placeholder: this.getPlaceholder(),
      droppableProps: {
        'data-react-beautiful-dnd-droppable': this.styleContext
      }
    };
    var snapshot = {
      isDraggingOver: isDraggingOver,
      draggingOverWith: draggingOverWith
    };
    return React__default.createElement(DroppableDimensionPublisher, {
      droppableId: droppableId,
      type: type,
      direction: direction,
      ignoreContainerClipping: ignoreContainerClipping,
      isDropDisabled: isDropDisabled,
      getDroppableRef: this.getDroppableRef
    }, children(provided, snapshot));
  };

  return Droppable;
}(React.Component);

Droppable.contextTypes = (_Droppable$contextTyp = {}, _Droppable$contextTyp[styleContextKey] = PropTypes.string.isRequired, _Droppable$contextTyp);
Droppable.childContextTypes = (_Droppable$childConte = {}, _Droppable$childConte[droppableIdKey] = PropTypes.string.isRequired, _Droppable$childConte[droppableTypeKey] = PropTypes.string.isRequired, _Droppable$childConte);

var isStrictEqual = (function (a, b) {
  return a === b;
});

var makeMapStateToProps = function makeMapStateToProps() {
  var getIsDraggingOver = function getIsDraggingOver(id, destination) {
    if (!destination) {
      return false;
    }

    return destination.droppableId === id;
  };

  var shouldUsePlaceholder = function shouldUsePlaceholder(id, descriptor, destination) {
    if (!destination) {
      return false;
    }

    if (id === descriptor.droppableId) {
      return false;
    }

    return id === destination.droppableId;
  };

  var getMapProps = memoizeOne(function (isDraggingOver, draggingOverWith, placeholder) {
    return {
      isDraggingOver: isDraggingOver,
      draggingOverWith: draggingOverWith,
      placeholder: placeholder
    };
  });

  var selector = function selector(state, ownProps) {
    if (ownProps.isDropDisabled) {
      return getMapProps(false, null, null);
    }

    var id = ownProps.droppableId;

    if (state.isDragging) {
      var destination = state.impact.destination;
      var isDraggingOver = getIsDraggingOver(id, destination);
      var draggableId = state.critical.draggable.id;
      var draggingOverWith = isDraggingOver ? draggableId : null;
      var draggable = state.dimensions.draggables[draggableId];
      var placeholder = shouldUsePlaceholder(id, draggable.descriptor, destination) ? draggable.placeholder : null;
      return getMapProps(isDraggingOver, draggingOverWith, placeholder);
    }

    if (state.phase === 'DROP_ANIMATING') {
      var _destination = state.pending.impact.destination;

      var _isDraggingOver = getIsDraggingOver(id, _destination);

      var _draggableId = state.pending.result.draggableId;

      var _draggingOverWith = _isDraggingOver ? _draggableId : null;

      var _draggable = state.dimensions.draggables[_draggableId];

      var _placeholder = shouldUsePlaceholder(id, _draggable.descriptor, _destination) ? _draggable.placeholder : null;

      return getMapProps(_isDraggingOver, _draggingOverWith, _placeholder);
    }

    return getMapProps(false, null, null);
  };

  return selector;
};
var connectedDroppable = reactRedux.connect(makeMapStateToProps, null, null, {
  storeKey: storeKey,
  pure: true,
  areStatePropsEqual: isStrictEqual
})(Droppable);
connectedDroppable.defaultProps = {
  type: 'DEFAULT',
  isDropDisabled: false,
  direction: 'vertical',
  ignoreContainerClipping: false
};

var _DraggableDimensionPu;

var DraggableDimensionPublisher = function (_Component) {
  _inheritsLoose(DraggableDimensionPublisher, _Component);

  function DraggableDimensionPublisher() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.publishedDescriptor = null;
    _this.getMemoizedDescriptor = memoizeOne(function (id, index, droppableId, type) {
      return {
        id: id,
        index: index,
        droppableId: droppableId,
        type: type
      };
    });

    _this.publish = function () {
      var marshal = _this.context[dimensionMarshalKey];

      var descriptor = _this.getMemoizedDescriptor(_this.props.draggableId, _this.props.index, _this.props.droppableId, _this.props.type);

      if (!_this.publishedDescriptor) {
        marshal.registerDraggable(descriptor, _this.getDimension);
        _this.publishedDescriptor = descriptor;
        return;
      }

      if (descriptor === _this.publishedDescriptor) {
        return;
      }

      marshal.updateDraggable(_this.publishedDescriptor, descriptor, _this.getDimension);
      _this.publishedDescriptor = descriptor;
    };

    _this.unpublish = function () {
      !_this.publishedDescriptor ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot unpublish descriptor when none is published') : invariant(false) : void 0;
      var marshal = _this.context[dimensionMarshalKey];
      marshal.unregisterDraggable(_this.publishedDescriptor);
      _this.publishedDescriptor = null;
    };

    _this.getDimension = function (windowScroll) {
      var targetRef = _this.props.getDraggableRef();

      var descriptor = _this.publishedDescriptor;
      !targetRef ? process.env.NODE_ENV !== "production" ? invariant(false, 'DraggableDimensionPublisher cannot calculate a dimension when not attached to the DOM') : invariant(false) : void 0;
      !descriptor ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot get dimension for unpublished draggable') : invariant(false) : void 0;
      var computedStyles = window.getComputedStyle(targetRef);
      var borderBox = targetRef.getBoundingClientRect();
      var client = cssBoxModel.calculateBox(borderBox, computedStyles);
      var page = cssBoxModel.withScroll(client, windowScroll);
      var placeholder = {
        client: client,
        tagName: targetRef.tagName.toLowerCase(),
        display: computedStyles.display
      };
      var dimension = {
        descriptor: descriptor,
        placeholder: placeholder,
        client: client,
        page: page
      };
      return dimension;
    };

    return _this;
  }

  var _proto = DraggableDimensionPublisher.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.publish();
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.publish();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unpublish();
  };

  _proto.render = function render() {
    return this.props.children;
  };

  return DraggableDimensionPublisher;
}(React.Component);

DraggableDimensionPublisher.contextTypes = (_DraggableDimensionPu = {}, _DraggableDimensionPu[dimensionMarshalKey] = PropTypes.object.isRequired, _DraggableDimensionPu);

var DoubleRenderBlocker = function (_React$Component) {
  _inheritsLoose(DoubleRenderBlocker, _React$Component);

  function DoubleRenderBlocker() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = DoubleRenderBlocker.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    if (isEqual(origin, nextProps.change)) {
      return true;
    }

    if (isEqual(this.props.change, nextProps.change)) {
      return false;
    }

    return true;
  };

  _proto.render = function render() {
    return this.props.children(this.props.change);
  };

  return DoubleRenderBlocker;
}(React__default.Component);

var Moveable = function (_Component) {
  _inheritsLoose(Moveable, _Component);

  function Moveable() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto2 = Moveable.prototype;

  _proto2.getFinal = function getFinal() {
    var destination = this.props.destination;
    var speed = this.props.speed;

    if (speed === 'INSTANT') {
      return destination;
    }

    var config = speed === 'FAST' ? physics.fast : physics.standard;
    return {
      x: reactMotion.spring(destination.x, config),
      y: reactMotion.spring(destination.y, config)
    };
  };

  _proto2.render = function render() {
    var _this = this;

    var final = this.getFinal();
    return React__default.createElement(reactMotion.Motion, {
      defaultStyle: origin,
      style: final,
      onRest: this.props.onMoveEnd
    }, function (current) {
      var _this$props = _this.props,
          speed = _this$props.speed,
          destination = _this$props.destination,
          children = _this$props.children;
      var target = speed === 'INSTANT' ? destination : current;
      return React__default.createElement(DoubleRenderBlocker, {
        change: target
      }, children);
    });
  };

  return Moveable;
}(React.Component);

Moveable.defaultProps = {
  destination: origin
};

var getWindowFromRef = (function (ref) {
  return ref ? ref.ownerDocument.defaultView : window;
});

var selector = "[" + dragHandle + "]";

var throwIfSVG = function throwIfSVG(el) {
  var isSVG = el instanceof SVGElement;
  !!isSVG ? process.env.NODE_ENV !== "production" ? invariant(false, "A drag handle cannot be an SVGElement: it has inconsistent focus support.\n\n    More information: https://github.com/atlassian/react-beautiful-dnd/tree/master/docs/guides/dragging-svgs.md") : invariant(false) : void 0;
};

var getDragHandleRef = function getDragHandleRef(draggableRef) {
  if (draggableRef.hasAttribute(dragHandle)) {
    throwIfSVG(draggableRef);
    return draggableRef;
  }

  var el = draggableRef.querySelector(selector);
  throwIfSVG(draggableRef);
  !el ? process.env.NODE_ENV !== "production" ? invariant(false, "\n      Cannot find drag handle element inside of Draggable.\n      Please be sure to apply the {...provided.dragHandleProps} to your Draggable\n\n      More information: https://github.com/atlassian/react-beautiful-dnd#draggable\n    ") : invariant(false) : void 0;
  !(el instanceof HTMLElement) ? process.env.NODE_ENV !== "production" ? invariant(false, 'A drag handle must be a HTMLElement') : invariant(false) : void 0;
  return el;
};

var retainingFocusFor = null;

var clearRetentionOnFocusChange = function () {
  var isBound = false;

  var bind = function bind() {
    if (isBound) {
      return;
    }

    isBound = true;
    window.addEventListener('focus', onWindowFocusChange, {
      capture: true
    });
  };

  var unbind = function unbind() {
    if (!isBound) {
      return;
    }

    isBound = false;
    window.removeEventListener('focus', onWindowFocusChange, {
      capture: true
    });
  };

  var onWindowFocusChange = function onWindowFocusChange() {
    unbind();
    retainingFocusFor = null;
  };

  var result = function result() {
    return bind();
  };

  result.cancel = function () {
    return unbind();
  };

  return result;
}();

var retain = function retain(id) {
  retainingFocusFor = id;
  clearRetentionOnFocusChange();
};

var tryRestoreFocus = function tryRestoreFocus(id, draggableRef) {
  if (!retainingFocusFor) {
    return;
  }

  if (id !== retainingFocusFor) {
    return;
  }

  retainingFocusFor = null;
  clearRetentionOnFocusChange.cancel();
  var dragHandleRef = getDragHandleRef(draggableRef);

  if (!dragHandleRef) {
    console.warn('Could not find drag handle in the DOM to focus on it');
    return;
  }

  dragHandleRef.focus();
};

var retainer = {
  retain: retain,
  tryRestoreFocus: tryRestoreFocus
};

var interactiveTagNames = {
  input: true,
  button: true,
  textarea: true,
  select: true,
  option: true,
  optgroup: true,
  video: true,
  audio: true
};

var isAnInteractiveElement = function isAnInteractiveElement(parent, current) {
  if (current == null) {
    return false;
  }

  var hasAnInteractiveTag = Boolean(interactiveTagNames[current.tagName.toLowerCase()]);

  if (hasAnInteractiveTag) {
    return true;
  }

  var attribute = current.getAttribute('contenteditable');

  if (attribute === 'true' || attribute === '') {
    return true;
  }

  if (current === parent) {
    return false;
  }

  return isAnInteractiveElement(parent, current.parentElement);
};

var shouldAllowDraggingFromTarget = (function (event, props) {
  if (props.canDragInteractiveElements) {
    return true;
  }

  var target = event.target,
      currentTarget = event.currentTarget;

  if (!(target instanceof Element) || !(currentTarget instanceof Element)) {
    return true;
  }

  return !isAnInteractiveElement(currentTarget, target);
});

var createScheduler = (function (callbacks) {
  var memoizedMove = memoizeOne(function (x, y) {
    var point = {
      x: x,
      y: y
    };
    callbacks.onMove(point);
  });
  var move = rafSchd(function (point) {
    return memoizedMove(point.x, point.y);
  });
  var moveUp = rafSchd(callbacks.onMoveUp);
  var moveDown = rafSchd(callbacks.onMoveDown);
  var moveRight = rafSchd(callbacks.onMoveRight);
  var moveLeft = rafSchd(callbacks.onMoveLeft);
  var windowScrollMove = rafSchd(callbacks.onWindowScroll);

  var cancel = function cancel() {
    move.cancel();
    moveUp.cancel();
    moveDown.cancel();
    moveRight.cancel();
    moveLeft.cancel();
    windowScrollMove.cancel();
  };

  return {
    move: move,
    moveUp: moveUp,
    moveDown: moveDown,
    moveRight: moveRight,
    moveLeft: moveLeft,
    windowScrollMove: windowScrollMove,
    cancel: cancel
  };
});

var sloppyClickThreshold = 5;
var isSloppyClickThresholdExceeded = (function (original, current) {
  return Math.abs(current.x - original.x) >= sloppyClickThreshold || Math.abs(current.y - original.y) >= sloppyClickThreshold;
});

var tab = 9;
var enter = 13;
var escape = 27;
var space = 32;
var pageUp = 33;
var pageDown = 34;
var end = 35;
var home = 36;
var arrowLeft = 37;
var arrowUp = 38;
var arrowRight = 39;
var arrowDown = 40;

var _preventedKeys;
var preventedKeys = (_preventedKeys = {}, _preventedKeys[enter] = true, _preventedKeys[tab] = true, _preventedKeys);
var preventStandardKeyEvents = (function (event) {
  if (preventedKeys[event.keyCode]) {
    event.preventDefault();
  }
});

var bindEvents = function bindEvents(el, bindings, sharedOptions) {
  bindings.forEach(function (binding) {
    var options = _extends({}, sharedOptions, binding.options);

    el.addEventListener(binding.eventName, binding.fn, options);
  });
};
var unbindEvents = function unbindEvents(el, bindings, sharedOptions) {
  bindings.forEach(function (binding) {
    var options = _extends({}, sharedOptions, binding.options);

    el.removeEventListener(binding.eventName, binding.fn, options);
  });
};

var createPostDragEventPreventer = (function (getWindow) {
  var isBound = false;

  var bind = function bind() {
    if (isBound) {
      return;
    }

    isBound = true;
    bindEvents(getWindow(), pointerEvents, {
      capture: true
    });
  };

  var unbind = function unbind() {
    if (!isBound) {
      return;
    }

    isBound = false;
    unbindEvents(getWindow(), pointerEvents, {
      capture: true
    });
  };

  var pointerEvents = [{
    eventName: 'click',
    fn: function fn(event) {
      event.preventDefault();
      unbind();
    }
  }, {
    eventName: 'mousedown',
    fn: unbind
  }, {
    eventName: 'touchstart',
    fn: unbind
  }];

  var preventNext = function preventNext() {
    if (isBound) {
      unbind();
    }

    bind();
  };

  var preventer = {
    preventNext: preventNext,
    abort: unbind
  };
  return preventer;
});

var createEventMarshal = (function () {
  var isMouseDownHandled = false;

  var handle = function handle() {
    !!isMouseDownHandled ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot handle mouse down as it is already handled') : invariant(false) : void 0;
    isMouseDownHandled = true;
  };

  var isHandled = function isHandled() {
    return isMouseDownHandled;
  };

  var reset = function reset() {
    isMouseDownHandled = false;
  };

  return {
    handle: handle,
    isHandled: isHandled,
    reset: reset
  };
});

var supportedEventName = function () {
  var base = 'visibilitychange';

  if (typeof document === 'undefined') {
    return base;
  }

  var candidates = [base, "ms" + base, "webkit" + base, "moz" + base, "o" + base];
  var supported = candidates.find(function (eventName) {
    return "on" + eventName in document;
  });
  return supported || base;
}();

var primaryButton = 0;

var noop = function noop() {};

var mouseDownMarshal = createEventMarshal();
var createMouseSensor = (function (_ref) {
  var callbacks = _ref.callbacks,
      getWindow = _ref.getWindow,
      canStartCapturing = _ref.canStartCapturing;
  var state = {
    isDragging: false,
    pending: null
  };

  var setState = function setState(newState) {
    state = newState;
  };

  var isDragging = function isDragging() {
    return state.isDragging;
  };

  var isCapturing = function isCapturing() {
    return Boolean(state.pending || state.isDragging);
  };

  var schedule = createScheduler(callbacks);
  var postDragEventPreventer = createPostDragEventPreventer(getWindow);

  var startDragging = function startDragging(fn) {
    if (fn === void 0) {
      fn = noop;
    }

    setState({
      pending: null,
      isDragging: true
    });
    fn();
  };

  var stopDragging = function stopDragging(fn, shouldBlockClick) {
    if (fn === void 0) {
      fn = noop;
    }

    if (shouldBlockClick === void 0) {
      shouldBlockClick = true;
    }

    schedule.cancel();
    unbindWindowEvents();
    mouseDownMarshal.reset();

    if (shouldBlockClick) {
      postDragEventPreventer.preventNext();
    }

    setState({
      isDragging: false,
      pending: null
    });
    fn();
  };

  var startPendingDrag = function startPendingDrag(point) {
    setState({
      pending: point,
      isDragging: false
    });
    bindWindowEvents();
  };

  var stopPendingDrag = function stopPendingDrag() {
    stopDragging(noop, false);
  };

  var kill = function kill(fn) {
    if (fn === void 0) {
      fn = noop;
    }

    if (state.pending) {
      stopPendingDrag();
      return;
    }

    stopDragging(fn);
  };

  var unmount = function unmount() {
    kill();
    postDragEventPreventer.abort();
  };

  var cancel = function cancel() {
    kill(callbacks.onCancel);
  };

  var windowBindings = [{
    eventName: 'mousemove',
    fn: function fn(event) {
      var button = event.button,
          clientX = event.clientX,
          clientY = event.clientY;

      if (button !== primaryButton) {
        return;
      }

      var point = {
        x: clientX,
        y: clientY
      };

      if (state.isDragging) {
        event.preventDefault();
        schedule.move(point);
        return;
      }

      if (!state.pending) {
        kill();
        process.env.NODE_ENV !== "production" ? invariant(false, 'Expected there to be a pending drag') : invariant(false);
      }

      if (!isSloppyClickThresholdExceeded(state.pending, point)) {
        return;
      }

      event.preventDefault();
      startDragging(function () {
        return callbacks.onLift({
          clientSelection: point,
          autoScrollMode: 'FLUID'
        });
      });
    }
  }, {
    eventName: 'mouseup',
    fn: function fn(event) {
      if (state.pending) {
        stopPendingDrag();
        return;
      }

      event.preventDefault();
      stopDragging(callbacks.onDrop);
    }
  }, {
    eventName: 'mousedown',
    fn: function fn(event) {
      if (state.isDragging) {
        event.preventDefault();
      }

      stopDragging(callbacks.onCancel);
    }
  }, {
    eventName: 'keydown',
    fn: function fn(event) {
      if (!state.isDragging) {
        cancel();
        return;
      }

      if (event.keyCode === escape) {
        event.preventDefault();
        cancel();
        return;
      }

      preventStandardKeyEvents(event);
    }
  }, {
    eventName: 'resize',
    fn: cancel
  }, {
    eventName: 'scroll',
    options: {
      passive: true,
      capture: false
    },
    fn: function fn() {
      if (state.pending) {
        stopPendingDrag();
        return;
      }

      schedule.windowScrollMove();
    }
  }, {
    eventName: 'webkitmouseforcechanged',
    fn: function fn(event) {
      if (event.webkitForce == null || MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN == null) {
        if (process.env.NODE_ENV !== 'production') {
          console.warn('handling a mouse force changed event when it is not supported');
        }

        return;
      }

      var forcePressThreshold = MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN;
      var isForcePressing = event.webkitForce >= forcePressThreshold;

      if (isForcePressing) {
        cancel();
      }
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];

  var bindWindowEvents = function bindWindowEvents() {
    var win = getWindow();
    bindEvents(win, windowBindings, {
      capture: true
    });
  };

  var unbindWindowEvents = function unbindWindowEvents() {
    var win = getWindow();
    unbindEvents(win, windowBindings, {
      capture: true
    });
  };

  var onMouseDown = function onMouseDown(event) {
    if (mouseDownMarshal.isHandled()) {
      return;
    }

    !!isCapturing() ? process.env.NODE_ENV !== "production" ? invariant(false, 'Should not be able to perform a mouse down while a drag or pending drag is occurring') : invariant(false) : void 0;

    if (!canStartCapturing(event)) {
      return;
    }

    if (event.button !== primaryButton) {
      return;
    }

    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
      return;
    }

    mouseDownMarshal.handle();
    event.preventDefault();
    var point = {
      x: event.clientX,
      y: event.clientY
    };
    startPendingDrag(point);
  };

  var sensor = {
    onMouseDown: onMouseDown,
    kill: kill,
    isCapturing: isCapturing,
    isDragging: isDragging,
    unmount: unmount
  };
  return sensor;
});

var getBorderBoxCenterPosition = (function (el) {
  return cssBoxModel.getRect(el.getBoundingClientRect()).center;
});

var _scrollJumpKeys;
var scrollJumpKeys = (_scrollJumpKeys = {}, _scrollJumpKeys[pageDown] = true, _scrollJumpKeys[pageUp] = true, _scrollJumpKeys[home] = true, _scrollJumpKeys[end] = true, _scrollJumpKeys);

var noop$1 = function noop() {};

var createKeyboardSensor = (function (_ref) {
  var callbacks = _ref.callbacks,
      getWindow = _ref.getWindow,
      getDraggableRef = _ref.getDraggableRef,
      canStartCapturing = _ref.canStartCapturing;
  var state = {
    isDragging: false
  };

  var setState = function setState(newState) {
    state = newState;
  };

  var startDragging = function startDragging(fn) {
    if (fn === void 0) {
      fn = noop$1;
    }

    setState({
      isDragging: true
    });
    bindWindowEvents();
    fn();
  };

  var stopDragging = function stopDragging(fn) {
    if (fn === void 0) {
      fn = noop$1;
    }

    schedule.cancel();
    unbindWindowEvents();
    setState({
      isDragging: false
    });
    fn();
  };

  var kill = function kill() {
    return stopDragging();
  };

  var cancel = function cancel() {
    stopDragging(callbacks.onCancel);
  };

  var isDragging = function isDragging() {
    return state.isDragging;
  };

  var schedule = createScheduler(callbacks);

  var onKeyDown = function onKeyDown(event) {
    if (!isDragging()) {
      if (event.defaultPrevented) {
        return;
      }

      if (!canStartCapturing(event)) {
        return;
      }

      if (event.keyCode !== space) {
        return;
      }

      var ref = getDraggableRef();
      !ref ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot start a keyboard drag without a draggable ref') : invariant(false) : void 0;
      var center = getBorderBoxCenterPosition(ref);
      event.preventDefault();
      startDragging(function () {
        return callbacks.onLift({
          clientSelection: center,
          autoScrollMode: 'JUMP'
        });
      });
      return;
    }

    if (event.keyCode === escape) {
      event.preventDefault();
      cancel();
      return;
    }

    if (event.keyCode === space) {
      event.preventDefault();
      stopDragging(callbacks.onDrop);
      return;
    }

    if (event.keyCode === arrowDown) {
      event.preventDefault();
      schedule.moveDown();
      return;
    }

    if (event.keyCode === arrowUp) {
      event.preventDefault();
      schedule.moveUp();
      return;
    }

    if (event.keyCode === arrowRight) {
      event.preventDefault();
      schedule.moveRight();
      return;
    }

    if (event.keyCode === arrowLeft) {
      event.preventDefault();
      schedule.moveLeft();
      return;
    }

    if (scrollJumpKeys[event.keyCode]) {
      event.preventDefault();
      return;
    }

    preventStandardKeyEvents(event);
  };

  var windowBindings = [{
    eventName: 'mousedown',
    fn: cancel
  }, {
    eventName: 'mouseup',
    fn: cancel
  }, {
    eventName: 'click',
    fn: cancel
  }, {
    eventName: 'touchstart',
    fn: cancel
  }, {
    eventName: 'resize',
    fn: cancel
  }, {
    eventName: 'wheel',
    fn: cancel
  }, {
    eventName: 'scroll',
    options: {
      capture: false
    },
    fn: callbacks.onWindowScroll
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];

  var bindWindowEvents = function bindWindowEvents() {
    bindEvents(getWindow(), windowBindings, {
      capture: true
    });
  };

  var unbindWindowEvents = function unbindWindowEvents() {
    unbindEvents(getWindow(), windowBindings, {
      capture: true
    });
  };

  var sensor = {
    onKeyDown: onKeyDown,
    kill: kill,
    isDragging: isDragging,
    isCapturing: isDragging,
    unmount: kill
  };
  return sensor;
});

var timeForLongPress = 150;
var forcePressThreshold = 0.15;
var touchStartMarshal = createEventMarshal();

var noop$2 = function noop() {};

var webkitHack = function () {
  var stub = {
    preventTouchMove: noop$2,
    releaseTouchMove: noop$2
  };

  if (typeof window === 'undefined') {
    return stub;
  }

  if (!('ontouchstart' in window)) {
    return stub;
  }

  var isBlocking = false;
  window.addEventListener('touchmove', function (event) {
    if (!isBlocking) {
      return;
    }

    if (event.defaultPrevented) {
      return;
    }

    event.preventDefault();
  }, {
    passive: false,
    capture: false
  });

  var preventTouchMove = function preventTouchMove() {
    isBlocking = true;
  };

  var releaseTouchMove = function releaseTouchMove() {
    isBlocking = false;
  };

  return {
    preventTouchMove: preventTouchMove,
    releaseTouchMove: releaseTouchMove
  };
}();

var initial = {
  isDragging: false,
  pending: null,
  hasMoved: false,
  longPressTimerId: null
};
var createTouchSensor = (function (_ref) {
  var callbacks = _ref.callbacks,
      getWindow = _ref.getWindow,
      canStartCapturing = _ref.canStartCapturing;
  var state = initial;

  var setState = function setState(partial) {
    state = _extends({}, state, partial);
  };

  var isDragging = function isDragging() {
    return state.isDragging;
  };

  var isCapturing = function isCapturing() {
    return Boolean(state.pending || state.isDragging || state.longPressTimerId);
  };

  var schedule = createScheduler(callbacks);
  var postDragEventPreventer = createPostDragEventPreventer(getWindow);

  var startDragging = function startDragging() {
    var pending = state.pending;

    if (!pending) {
      kill();
      process.env.NODE_ENV !== "production" ? invariant(false, 'cannot start a touch drag without a pending position') : invariant(false);
    }

    setState({
      isDragging: true,
      hasMoved: false,
      pending: null,
      longPressTimerId: null
    });
    callbacks.onLift({
      clientSelection: pending,
      autoScrollMode: 'FLUID'
    });
  };

  var stopDragging = function stopDragging(fn) {
    if (fn === void 0) {
      fn = noop$2;
    }

    schedule.cancel();
    touchStartMarshal.reset();
    webkitHack.releaseTouchMove();
    unbindWindowEvents();
    postDragEventPreventer.preventNext();
    setState(initial);
    fn();
  };

  var startPendingDrag = function startPendingDrag(event) {
    var touch = event.touches[0];
    var clientX = touch.clientX,
        clientY = touch.clientY;
    var point = {
      x: clientX,
      y: clientY
    };
    var longPressTimerId = setTimeout(startDragging, timeForLongPress);
    setState({
      longPressTimerId: longPressTimerId,
      pending: point,
      isDragging: false,
      hasMoved: false
    });
    bindWindowEvents();
  };

  var stopPendingDrag = function stopPendingDrag() {
    if (state.longPressTimerId) {
      clearTimeout(state.longPressTimerId);
    }

    schedule.cancel();
    touchStartMarshal.reset();
    webkitHack.releaseTouchMove();
    unbindWindowEvents();
    setState(initial);
  };

  var kill = function kill(fn) {
    if (fn === void 0) {
      fn = noop$2;
    }

    if (state.pending) {
      stopPendingDrag();
      return;
    }

    stopDragging(fn);
  };

  var unmount = function unmount() {
    kill();
    postDragEventPreventer.abort();
  };

  var cancel = function cancel() {
    kill(callbacks.onCancel);
  };

  var windowBindings = [{
    eventName: 'touchmove',
    options: {
      passive: false
    },
    fn: function fn(event) {
      if (!state.isDragging) {
        stopPendingDrag();
        return;
      }

      if (!state.hasMoved) {
        setState({
          hasMoved: true
        });
      }

      var _event$touches$ = event.touches[0],
          clientX = _event$touches$.clientX,
          clientY = _event$touches$.clientY;
      var point = {
        x: clientX,
        y: clientY
      };
      event.preventDefault();
      schedule.move(point);
    }
  }, {
    eventName: 'touchend',
    fn: function fn(event) {
      if (!state.isDragging) {
        stopPendingDrag();
        return;
      }

      event.preventDefault();
      stopDragging(callbacks.onDrop);
    }
  }, {
    eventName: 'touchcancel',
    fn: function fn(event) {
      if (!state.isDragging) {
        stopPendingDrag();
        return;
      }

      event.preventDefault();
      stopDragging(callbacks.onCancel);
    }
  }, {
    eventName: 'touchstart',
    fn: cancel
  }, {
    eventName: 'orientationchange',
    fn: cancel
  }, {
    eventName: 'resize',
    fn: cancel
  }, {
    eventName: 'scroll',
    options: {
      passive: true,
      capture: false
    },
    fn: function fn() {
      if (state.pending) {
        stopPendingDrag();
        return;
      }

      schedule.windowScrollMove();
    }
  }, {
    eventName: 'contextmenu',
    fn: function fn(event) {
      event.preventDefault();
    }
  }, {
    eventName: 'keydown',
    fn: function fn(event) {
      if (!state.isDragging) {
        cancel();
        return;
      }

      if (event.keyCode === escape) {
        event.preventDefault();
      }

      cancel();
    }
  }, {
    eventName: 'touchforcechange',
    fn: function fn(event) {
      if (state.hasMoved) {
        event.preventDefault();
        return;
      }

      var touch = event.touches[0];

      if (touch.force >= forcePressThreshold) {
        cancel();
      }
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];

  var bindWindowEvents = function bindWindowEvents() {
    bindEvents(getWindow(), windowBindings, {
      capture: true
    });
  };

  var unbindWindowEvents = function unbindWindowEvents() {
    unbindEvents(getWindow(), windowBindings, {
      capture: true
    });
  };

  var onTouchStart = function onTouchStart(event) {
    if (touchStartMarshal.isHandled()) {
      return;
    }

    !!isCapturing() ? process.env.NODE_ENV !== "production" ? invariant(false, 'Should not be able to perform a touch start while a drag or pending drag is occurring') : invariant(false) : void 0;

    if (!canStartCapturing(event)) {
      return;
    }

    touchStartMarshal.handle();
    webkitHack.preventTouchMove();
    startPendingDrag(event);
  };

  var sensor = {
    onTouchStart: onTouchStart,
    kill: kill,
    isCapturing: isCapturing,
    isDragging: isDragging,
    unmount: unmount
  };
  return sensor;
});

var _DragHandle$contextTy;

var preventHtml5Dnd = function preventHtml5Dnd(event) {
  event.preventDefault();
};

var DragHandle = function (_Component) {
  _inheritsLoose(DragHandle, _Component);

  function DragHandle(props, context) {
    var _this;

    _this = _Component.call(this, props, context) || this;
    _this.mouseSensor = void 0;
    _this.keyboardSensor = void 0;
    _this.touchSensor = void 0;
    _this.sensors = void 0;
    _this.styleContext = void 0;
    _this.canLift = void 0;
    _this.isFocused = false;
    _this.lastDraggableRef = void 0;

    _this.onFocus = function () {
      _this.isFocused = true;
    };

    _this.onBlur = function () {
      _this.isFocused = false;
    };

    _this.onKeyDown = function (event) {
      if (_this.mouseSensor.isCapturing() || _this.touchSensor.isCapturing()) {
        return;
      }

      _this.keyboardSensor.onKeyDown(event);
    };

    _this.onMouseDown = function (event) {
      if (_this.keyboardSensor.isCapturing() || _this.mouseSensor.isCapturing()) {
        return;
      }

      _this.mouseSensor.onMouseDown(event);
    };

    _this.onTouchStart = function (event) {
      if (_this.mouseSensor.isCapturing() || _this.keyboardSensor.isCapturing()) {
        return;
      }

      _this.touchSensor.onTouchStart(event);
    };

    _this.canStartCapturing = function (event) {
      if (_this.isAnySensorCapturing()) {
        return false;
      }

      if (!_this.canLift(_this.props.draggableId)) {
        return false;
      }

      return shouldAllowDraggingFromTarget(event, _this.props);
    };

    _this.isAnySensorCapturing = function () {
      return _this.sensors.some(function (sensor) {
        return sensor.isCapturing();
      });
    };

    _this.getProvided = memoizeOne(function (isEnabled) {
      if (!isEnabled) {
        return null;
      }

      var provided = {
        onMouseDown: _this.onMouseDown,
        onKeyDown: _this.onKeyDown,
        onTouchStart: _this.onTouchStart,
        onFocus: _this.onFocus,
        onBlur: _this.onBlur,
        tabIndex: 0,
        'data-react-beautiful-dnd-drag-handle': _this.styleContext,
        'aria-roledescription': 'Draggable item. Press space bar to lift',
        draggable: false,
        onDragStart: preventHtml5Dnd
      };
      return provided;
    });

    var getWindow = function getWindow() {
      return getWindowFromRef(_this.props.getDraggableRef());
    };

    var args = {
      callbacks: _this.props.callbacks,
      getDraggableRef: _this.props.getDraggableRef,
      getWindow: getWindow,
      canStartCapturing: _this.canStartCapturing
    };
    _this.mouseSensor = createMouseSensor(args);
    _this.keyboardSensor = createKeyboardSensor(args);
    _this.touchSensor = createTouchSensor(args);
    _this.sensors = [_this.mouseSensor, _this.keyboardSensor, _this.touchSensor];
    _this.styleContext = context[styleContextKey];
    _this.canLift = context[canLiftContextKey];
    return _this;
  }

  var _proto = DragHandle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var draggableRef = this.props.getDraggableRef();
    this.lastDraggableRef = draggableRef;
    !draggableRef ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot get draggable ref from drag handle') : invariant(false) : void 0;

    if (!this.props.isEnabled) {
      return;
    }

    var dragHandleRef = getDragHandleRef(draggableRef);
    retainer.tryRestoreFocus(this.props.draggableId, dragHandleRef);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this2 = this;

    var ref = this.props.getDraggableRef();

    if (ref !== this.lastDraggableRef) {
      this.lastDraggableRef = ref;

      if (!ref || !this.isFocused) {
        return;
      }

      if (!this.props.isEnabled) {
        return;
      }

      getDragHandleRef(ref).focus();
    }

    var isCapturing = this.isAnySensorCapturing();

    if (!isCapturing) {
      return;
    }

    var isDragStopping = prevProps.isDragging && !this.props.isDragging;

    if (isDragStopping) {
      this.sensors.forEach(function (sensor) {
        if (sensor.isCapturing()) {
          sensor.kill();
        }
      });
    }

    if (this.props.isEnabled) {
      return;
    }

    this.sensors.forEach(function (sensor) {
      if (!sensor.isCapturing()) {
        return;
      }

      var wasDragging = sensor.isDragging();
      sensor.kill();

      if (wasDragging) {
        if (process.env.NODE_ENV !== 'production') {
          console.warn('You have disabled dragging on a Draggable while it was dragging. The drag has been cancelled');
        }

        _this2.props.callbacks.onCancel();
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var _this3 = this;

    this.sensors.forEach(function (sensor) {
      var wasDragging = sensor.isDragging();
      sensor.unmount();

      if (wasDragging) {
        _this3.props.callbacks.onCancel();
      }
    });

    var shouldRetainFocus = function () {
      if (!_this3.props.isEnabled) {
        return false;
      }

      if (!_this3.isFocused) {
        return false;
      }

      return _this3.props.isDragging || _this3.props.isDropAnimating;
    }();

    if (shouldRetainFocus) {
      retainer.retain(this.props.draggableId);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        isEnabled = _this$props.isEnabled;
    return children(this.getProvided(isEnabled));
  };

  return DragHandle;
}(React.Component);

DragHandle.contextTypes = (_DragHandle$contextTy = {}, _DragHandle$contextTy[styleContextKey] = PropTypes.string.isRequired, _DragHandle$contextTy[canLiftContextKey] = PropTypes.func.isRequired, _DragHandle$contextTy);

var getWindowScroll = (function () {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
});

var getViewport = (function () {
  var scroll = getWindowScroll();
  var top = scroll.y;
  var left = scroll.x;
  var doc = document.documentElement;
  !doc ? process.env.NODE_ENV !== "production" ? invariant(false, 'Could not find document.documentElement') : invariant(false) : void 0;
  var width = doc.clientWidth;
  var height = doc.clientHeight;
  var right = left + width;
  var bottom = top + height;
  var frame = cssBoxModel.getRect({
    top: top,
    left: left,
    right: right,
    bottom: bottom
  });
  var maxScroll = getMaxScroll({
    scrollHeight: doc.scrollHeight,
    scrollWidth: doc.scrollWidth,
    width: frame.width,
    height: frame.height
  });
  var viewport = {
    frame: frame,
    scroll: {
      initial: scroll,
      current: scroll,
      max: maxScroll,
      diff: {
        value: origin,
        displacement: origin
      }
    }
  };
  return viewport;
});

var _Draggable$contextTyp;
var zIndexOptions = {
  dragging: 5000,
  dropAnimating: 4500
};

var getTranslate = function getTranslate(offset) {
  if (isEqual(offset, origin)) {
    return null;
  }

  return "translate(" + offset.x + "px, " + offset.y + "px)";
};

var getSpeed$1 = function getSpeed(isDragging, shouldAnimateDragMovement, isDropAnimating) {
  if (isDropAnimating) {
    return 'STANDARD';
  }

  if (isDragging && shouldAnimateDragMovement) {
    return 'FAST';
  }

  return 'INSTANT';
};

var Draggable = function (_Component) {
  _inheritsLoose(Draggable, _Component);

  function Draggable(props, context) {
    var _this;

    _this = _Component.call(this, props, context) || this;
    _this.callbacks = void 0;
    _this.styleContext = void 0;
    _this.ref = null;

    _this.onMoveEnd = function () {
      if (_this.props.isDropAnimating) {
        _this.props.dropAnimationFinished();
      }
    };

    _this.onLift = function (options) {
      start('LIFT');
      var ref = _this.ref;
      !ref ? process.env.NODE_ENV !== "production" ? invariant(false) : invariant(false) : void 0;
      !!_this.props.isDragDisabled ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot lift a Draggable when it is disabled') : invariant(false) : void 0;
      var clientSelection = options.clientSelection,
          autoScrollMode = options.autoScrollMode;
      var _this$props = _this.props,
          lift = _this$props.lift,
          draggableId = _this$props.draggableId;
      var client = {
        selection: clientSelection,
        borderBoxCenter: getBorderBoxCenterPosition(ref),
        offset: origin
      };
      lift({
        id: draggableId,
        client: client,
        autoScrollMode: autoScrollMode,
        viewport: getViewport()
      });
      finish('LIFT');
    };

    _this.setRef = function (ref) {
      if (ref === null) {
        return;
      }

      if (ref === _this.ref) {
        return;
      }

      _this.ref = ref;
      throwIfRefIsInvalid(ref);
    };

    _this.getDraggableRef = function () {
      return _this.ref;
    };

    _this.getDraggingStyle = memoizeOne(function (change, dimension, isDropAnimating) {
      var box = dimension.client;
      var style = {
        position: 'fixed',
        top: box.marginBox.top,
        left: box.marginBox.left,
        boxSizing: 'border-box',
        width: box.borderBox.width,
        height: box.borderBox.height,
        transition: 'none',
        zIndex: isDropAnimating ? zIndexOptions.dropAnimating : zIndexOptions.dragging,
        transform: getTranslate(change),
        pointerEvents: 'none'
      };
      return style;
    });
    _this.getNotDraggingStyle = memoizeOne(function (current, shouldAnimateDisplacement) {
      var style = {
        transform: getTranslate(current),
        transition: shouldAnimateDisplacement ? null : 'none'
      };
      return style;
    });
    _this.getProvided = memoizeOne(function (change, isDragging, isDropAnimating, shouldAnimateDisplacement, dimension, dragHandleProps) {
      var useDraggingStyle = isDragging || isDropAnimating;

      var draggableStyle = function () {
        if (!useDraggingStyle) {
          return _this.getNotDraggingStyle(change, shouldAnimateDisplacement);
        }

        !dimension ? process.env.NODE_ENV !== "production" ? invariant(false, 'draggable dimension required for dragging') : invariant(false) : void 0;
        return _this.getDraggingStyle(change, dimension, isDropAnimating);
      }();

      var provided = {
        innerRef: _this.setRef,
        draggableProps: {
          'data-react-beautiful-dnd-draggable': _this.styleContext,
          style: draggableStyle
        },
        dragHandleProps: dragHandleProps
      };
      return provided;
    });
    _this.getSnapshot = memoizeOne(function (isDragging, isDropAnimating, draggingOver) {
      return {
        isDragging: isDragging || isDropAnimating,
        isDropAnimating: isDropAnimating,
        draggingOver: draggingOver
      };
    });

    _this.renderChildren = function (change, dragHandleProps) {
      var _this$props2 = _this.props,
          isDragging = _this$props2.isDragging,
          isDropAnimating = _this$props2.isDropAnimating,
          dimension = _this$props2.dimension,
          draggingOver = _this$props2.draggingOver,
          shouldAnimateDisplacement = _this$props2.shouldAnimateDisplacement,
          children = _this$props2.children;
      var child = children(_this.getProvided(change, isDragging, isDropAnimating, shouldAnimateDisplacement, dimension, dragHandleProps), _this.getSnapshot(isDragging, isDropAnimating, draggingOver));
      var isDraggingOrDropping = isDragging || isDropAnimating;

      var placeholder = function () {
        if (!isDraggingOrDropping) {
          return null;
        }

        !dimension ? process.env.NODE_ENV !== "production" ? invariant(false, 'Draggable: Dimension is required for dragging') : invariant(false) : void 0;
        return React__default.createElement(Placeholder, {
          placeholder: dimension.placeholder
        });
      }();

      return React__default.createElement(React.Fragment, null, child, placeholder);
    };

    var callbacks = {
      onLift: _this.onLift,
      onMove: function onMove(clientSelection) {
        return props.move({
          client: clientSelection,
          shouldAnimate: false
        });
      },
      onDrop: function onDrop() {
        return props.drop({
          reason: 'DROP'
        });
      },
      onCancel: function onCancel() {
        return props.drop({
          reason: 'CANCEL'
        });
      },
      onMoveUp: props.moveUp,
      onMoveDown: props.moveDown,
      onMoveRight: props.moveRight,
      onMoveLeft: props.moveLeft,
      onWindowScroll: function onWindowScroll() {
        return props.moveByWindowScroll({
          scroll: getWindowScroll()
        });
      }
    };
    _this.callbacks = callbacks;
    _this.styleContext = context[styleContextKey];
    return _this;
  }

  var _proto = Draggable.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.ref = null;
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props3 = this.props,
        draggableId = _this$props3.draggableId,
        index = _this$props3.index,
        offset = _this$props3.offset,
        isDragging = _this$props3.isDragging,
        isDropAnimating = _this$props3.isDropAnimating,
        isDragDisabled = _this$props3.isDragDisabled,
        shouldAnimateDragMovement = _this$props3.shouldAnimateDragMovement,
        disableInteractiveElementBlocking = _this$props3.disableInteractiveElementBlocking;
    var droppableId = this.context[droppableIdKey];
    var type = this.context[droppableTypeKey];
    var speed = getSpeed$1(isDragging, shouldAnimateDragMovement, isDropAnimating);
    return React__default.createElement(DraggableDimensionPublisher, {
      key: draggableId,
      draggableId: draggableId,
      droppableId: droppableId,
      type: type,
      index: index,
      getDraggableRef: this.getDraggableRef
    }, React__default.createElement(Moveable, {
      speed: speed,
      destination: offset,
      onMoveEnd: this.onMoveEnd
    }, function (change) {
      return React__default.createElement(DragHandle, {
        draggableId: draggableId,
        isDragging: isDragging,
        isDropAnimating: isDropAnimating,
        isEnabled: !isDragDisabled,
        callbacks: _this2.callbacks,
        getDraggableRef: _this2.getDraggableRef,
        canDragInteractiveElements: disableInteractiveElementBlocking
      }, function (dragHandleProps) {
        return _this2.renderChildren(change, dragHandleProps);
      });
    }));
  };

  return Draggable;
}(React.Component);

Draggable.contextTypes = (_Draggable$contextTyp = {}, _Draggable$contextTyp[droppableIdKey] = PropTypes.string.isRequired, _Draggable$contextTyp[droppableTypeKey] = PropTypes.string.isRequired, _Draggable$contextTyp[styleContextKey] = PropTypes.string.isRequired, _Draggable$contextTyp);

var defaultMapProps = {
  isDropAnimating: false,
  isDragging: false,
  offset: origin,
  shouldAnimateDragMovement: false,
  shouldAnimateDisplacement: true,
  dimension: null,
  draggingOver: null
};
var makeMapStateToProps$1 = function makeMapStateToProps() {
  var memoizedOffset = memoizeOne(function (x, y) {
    return {
      x: x,
      y: y
    };
  });
  var getNotDraggingProps = memoizeOne(function (offset, shouldAnimateDisplacement) {
    return {
      isDropAnimating: false,
      isDragging: false,
      offset: offset,
      shouldAnimateDisplacement: shouldAnimateDisplacement,
      shouldAnimateDragMovement: false,
      dimension: null,
      draggingOver: null
    };
  });
  var getDraggingProps = memoizeOne(function (offset, shouldAnimateDragMovement, dimension, draggingOver) {
    return {
      isDragging: true,
      isDropAnimating: false,
      shouldAnimateDisplacement: false,
      offset: offset,
      shouldAnimateDragMovement: shouldAnimateDragMovement,
      dimension: dimension,
      draggingOver: draggingOver
    };
  });

  var getOutOfTheWayMovement = function getOutOfTheWayMovement(id, movement) {
    var map = getDisplacementMap(movement.displaced);
    var displacement = map[id];

    if (!displacement) {
      return null;
    }

    if (!displacement.isVisible) {
      return null;
    }

    var amount = movement.isBeyondStartPosition ? negate(movement.amount) : movement.amount;
    return getNotDraggingProps(memoizedOffset(amount.x, amount.y), displacement.shouldAnimate);
  };

  var draggingSelector = function draggingSelector(state, ownProps) {
    if (state.isDragging) {
      if (state.critical.draggable.id !== ownProps.draggableId) {
        return null;
      }

      var offset = state.current.client.offset;
      var dimension = state.dimensions.draggables[ownProps.draggableId];
      var shouldAnimateDragMovement = state.shouldAnimate;
      var draggingOver = state.impact.destination ? state.impact.destination.droppableId : null;
      return getDraggingProps(memoizedOffset(offset.x, offset.y), shouldAnimateDragMovement, dimension, draggingOver);
    }

    if (state.phase === 'DROP_ANIMATING') {
      var pending = state.pending;

      if (pending.result.draggableId !== ownProps.draggableId) {
        return null;
      }

      var _draggingOver = pending.result.destination ? pending.result.destination.droppableId : null;

      return {
        isDragging: false,
        isDropAnimating: true,
        offset: pending.newHomeOffset,
        dimension: state.dimensions.draggables[ownProps.draggableId],
        draggingOver: _draggingOver,
        shouldAnimateDragMovement: false,
        shouldAnimateDisplacement: false
      };
    }

    return null;
  };

  var movingOutOfTheWaySelector = function movingOutOfTheWaySelector(state, ownProps) {
    if (state.isDragging) {
      if (state.critical.draggable.id === ownProps.draggableId) {
        return null;
      }

      return getOutOfTheWayMovement(ownProps.draggableId, state.impact.movement);
    }

    if (state.phase === 'DROP_ANIMATING') {
      if (state.pending.result.draggableId === ownProps.draggableId) {
        return null;
      }

      return getOutOfTheWayMovement(ownProps.draggableId, state.pending.impact.movement);
    }

    return null;
  };

  var selector = function selector(state, ownProps) {
    var dragging = draggingSelector(state, ownProps);

    if (dragging) {
      return dragging;
    }

    var movingOutOfTheWay = movingOutOfTheWaySelector(state, ownProps);

    if (movingOutOfTheWay) {
      return movingOutOfTheWay;
    }

    return defaultMapProps;
  };

  return selector;
};
var mapDispatchToProps = {
  lift: lift,
  move: move,
  moveUp: moveUp,
  moveDown: moveDown,
  moveLeft: moveLeft,
  moveRight: moveRight,
  moveByWindowScroll: moveByWindowScroll,
  drop: drop,
  dropAnimationFinished: dropAnimationFinished
};
var ConnectedDraggable = reactRedux.connect(makeMapStateToProps$1, mapDispatchToProps, null, {
  storeKey: storeKey,
  pure: true,
  areStatePropsEqual: isStrictEqual
})(Draggable);
ConnectedDraggable.defaultProps = {
  isDragDisabled: false,
  disableInteractiveElementBlocking: false
};

exports.DragDropContext = DragDropContext;
exports.Droppable = connectedDroppable;
exports.Draggable = ConnectedDraggable;
exports.resetServerContext = resetServerContext;
